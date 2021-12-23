// DOM Element Declarations
const id_pre_peak_money = document.querySelector('#pre-peak-money');
const id_post_peak_money = document.querySelector('#post-peak-money');
const id_mara_put_money = document.querySelector('#mara-put-money');
const id_total_moners = document.querySelector('#total-moners');
const id_calculate = document.querySelector('#master-form');
const id_amount = document.querySelector('#amount');
const id_eth_price = document.querySelector('#eth_price');
const id_max_eth_to_btc = document.querySelector('#max_eth_to_btc');
const id_btc_drop = document.querySelector('#btc_drop');


// Price Points Class
class Point {
    constructor(eth_price, percent_eth_sell, percent_put_buy) {
        this.eth_price = eth_price;
        this.percent_eth_sell = percent_eth_sell;
        this.percent_put_buy = percent_put_buy;
    }
}

// Event Listener
id_calculate.addEventListener('submit', e => {
    e.preventDefault();
    
    let val_eth_sell = [];
    let val_percent_eth_sell = [];
    let val_percent_put_buy = [];
    
    for(i = 1; i < 11; i++){
        val_eth_sell.push(parseFloat(document.querySelector(`#eth_sell${i}`).value));
        val_percent_eth_sell.push(parseFloat(document.querySelector(`#percent_eth_sell${i}`).value));
        val_percent_put_buy.push(parseFloat(document.querySelector(`#percent_put_buy${i}`).value));
    }

    arr_predictions = [ {
        eth_amount: parseFloat(id_amount.value), //use
        max_eth_price: parseFloat(id_eth_price.value), //use
        max_btc_price: 189000,
        max_eth_to_btc: parseFloat(id_max_eth_to_btc.value),
        //btc_max_eth: this.max_eth_price / 0.1, //use
        btc_drop: parseFloat(id_btc_drop.value * 0.01), //use
        //low_btc_price: this.max_btc_price*(1-this.btc_drop)
        eth_drop: 0.25
    } ]

    let points = [];
    for(let i = 0; i < 10; i++){
        point = new Point(0,0,0);
        points.push(point)
    }

    for(let i = 0; i < 10; i++){
        if (val_eth_sell[i] >= 0) {
            points[i].eth_price = val_eth_sell[i];
        } else {
            points[i].eth_price = 0;
        }
        if (val_percent_eth_sell[i] >= 0) {
            points[i].percent_eth_sell = val_percent_eth_sell[i];
        } else {
            points[i].percent_eth_sell = 0;
        }
        if (val_percent_put_buy[i] >= 0) {
            points[i].percent_put_buy = val_percent_put_buy[i];
        } else {
            points[i].percent_put_buy = 0;
        }
    } 

    calculate(arr_predictions, points);
})

// Calculates Profits at Each Price Point
function calculate(arr_max_points, arr_sell_points){
    console.log(arr_sell_points);
    console.log(arr_max_points);
    let accumulator = 0

    arr_sell_points.forEach(each => {
        if(each.eth_price <= arr_max_points[0].max_eth_price) {
            let current = arr_max_points[0].eth_amount * each.percent_eth_sell * 0.01 * each.eth_price;
            accumulator += current;
            put_net = put_calculate(each, arr_max_points, current)
            accumulator += put_net;

        } else {
            accumulator += arr_max_points[0].eth_amount * each.percent_eth_sell * 0.01 * arr_max_points[0].max_eth_price * (1 - arr_max_points[0].eth_drop);
            
        }
    })

    id_total_moners.value = accumulator;
    
}

// Calculates Profit from Buying Puts on Mara
function put_calculate(each, arr_max_points, current){
    let percent_remain = 1 - arr_max_points[0].btc_drop;
    let max_btc = arr_max_points[0].max_eth_price/0.1/0.69;
    let low_btc = percent_remain * max_btc;
    let value_change = (low_btc - (each.eth_price/0.1)) / (each.eth_price/0.1) * 100;
    let put_profit_percent = 0.09 * 0.9787 **(-305 + value_change) - 100;
    
    let money_in_put = current * (each.percent_put_buy / 100)
    let money_out_put = money_in_put * ((100+put_profit_percent)/100)

    return money_out_put - money_in_put
}
