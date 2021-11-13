const id_pre_peak_money = document.querySelector('#pre-peak-money')
const id_post_peak_money = document.querySelector('#post-peak-money')
const id_mara_put_money = document.querySelector('#mara-put-money')
const id_total_moners = document.querySelector('#total-moners')

const id_calculate = document.querySelector('#master-form')

const id_amount = document.querySelector('#amount')

const id_eth_price = document.querySelector('#eth_price')
const id_max_eth_to_btc = document.querySelector('#max_eth_to_btc')
const id_btc_drop = document.querySelector('#btc_drop')

const id_eth_sell1 = document.querySelector('#eth_sell1')
const id_percent_eth_sell1 = document.querySelector('#percent_eth_sell1')
const id_percent_put_buy1 = document.querySelector('#percent_put_buy1')

const id_eth_sell2 = document.querySelector('#eth_sell2')
const id_percent_eth_sell2 = document.querySelector('#percent_eth_sell2')
const id_percent_put_buy2 = document.querySelector('#percent_put_buy2')

const id_eth_sell3 = document.querySelector('#eth_sell3')
const id_percent_eth_sell3 = document.querySelector('#percent_eth_sell3')
const id_percent_put_buy3 = document.querySelector('#percent_put_buy3')

const id_eth_sell4 = document.querySelector('#eth_sell4')
const id_percent_eth_sell4 = document.querySelector('#percent_eth_sell4')
const id_percent_put_buy4 = document.querySelector('#percent_put_buy4')

const id_eth_sell5 = document.querySelector('#eth_sell5')
const id_percent_eth_sell5 = document.querySelector('#percent_eth_sell5')
const id_percent_put_buy5 = document.querySelector('#percent_put_buy5')

const id_eth_sell6 = document.querySelector('#eth_sell6')
const id_percent_eth_sell6 = document.querySelector('#percent_eth_sell6')
const id_percent_put_buy6 = document.querySelector('#percent_put_buy6')

const id_eth_sell7 = document.querySelector('#eth_sell7')
const id_percent_eth_sell7 = document.querySelector('#percent_eth_sell7')
const id_percent_put_buy7 = document.querySelector('#percent_put_buy7')

const id_eth_sell8 = document.querySelector('#eth_sell8')
const id_percent_eth_sell8 = document.querySelector('#percent_eth_sell8')
const id_percent_put_buy8 = document.querySelector('#percent_put_buy8')

const id_eth_sell9 = document.querySelector('#eth_sell9')
const id_percent_eth_sell9 = document.querySelector('#percent_eth_sell9')
const id_percent_put_buy9 = document.querySelector('#percent_put_buy9')

const id_eth_sell10 = document.querySelector('#eth_sell10')
const id_percent_eth_sell10 = document.querySelector('#percent_eth_sell10')
const id_percent_put_buy10 = document.querySelector('#percent_put_buy10')

id_calculate.addEventListener('submit', clickCalculate)

function clickCalculate(e) {
    e.preventDefault()

    let val_amount = parseFloat(id_amount.value)
    let val_eth_price = parseFloat(id_eth_price.value)
    let val_max_eth_to_btc = parseFloat(id_max_eth_to_btc.value)
    let val_btc_drop = parseFloat(id_btc_drop.value)

    let val_eth_sell1 = parseFloat(id_eth_sell1.value)
    let val_percent_eth_sell1 = parseFloat(id_percent_eth_sell1.value)
    let val_percent_put_buy1 = parseFloat(id_percent_put_buy1.value)

    let val_eth_sell2 = parseFloat(id_eth_sell2.value)
    let val_percent_eth_sell2 = parseFloat(id_percent_eth_sell2.value)
    let val_percent_put_buy2 = parseFloat(id_percent_put_buy2.value)

    let val_eth_sell3 = parseFloat(id_eth_sell3.value)
    let val_percent_eth_sell3 = parseFloat(id_percent_eth_sell3.value)
    let val_percent_put_buy3 = parseFloat(id_percent_put_buy3.value)

    let val_eth_sell4 = parseFloat(id_eth_sell4.value)
    let val_percent_eth_sell4 = parseFloat(id_percent_eth_sell4.value)
    let val_percent_put_buy4 = parseFloat(id_percent_put_buy4.value)

    let val_eth_sell5 = parseFloat(id_eth_sell5.value)
    let val_percent_eth_sell5 = parseFloat(id_percent_eth_sell5.value)
    let val_percent_put_buy5 = parseFloat(id_percent_put_buy5.value)

    let val_eth_sell6 = parseFloat(id_eth_sell6.value)
    let val_percent_eth_sell6 = parseFloat(id_percent_eth_sell6.value)
    let val_percent_put_buy6 = parseFloat(id_percent_put_buy6.value)

    let val_eth_sell7 = parseFloat(id_eth_sell7.value)
    let val_percent_eth_sell7 = parseFloat(id_percent_eth_sell7.value)
    let val_percent_put_buy7 = parseFloat(id_percent_put_buy7.value)

    let val_eth_sell8 = parseFloat(id_eth_sell8.value)
    let val_percent_eth_sell8 = parseFloat(id_percent_eth_sell8.value)
    let val_percent_put_buy8 = parseFloat(id_percent_put_buy8.value)

    let val_eth_sell9 = parseFloat(id_eth_sell9.value)
    let val_percent_eth_sell9 = parseFloat(id_percent_eth_sell9.value)
    let val_percent_put_buy9 = parseFloat(id_percent_put_buy9.value)

    let val_eth_sell10 = parseFloat(id_eth_sell10.value)
    let val_percent_eth_sell10 = parseFloat(id_percent_eth_sell10.value)
    let val_percent_put_buy10 = parseFloat(id_percent_put_buy10.value)


    class Point {
        constructor(eth_price, percent_eth_sell, percent_put_buy) {
            this.eth_price = eth_price;
            this.percent_eth_sell = percent_eth_sell;
            this.percent_put_buy = percent_put_buy;
        }
    }

    let obj_max_points = {
        eth_amount: 0, //use
        max_eth_price: 0, //use
        max_btc_price: 189000,
        max_eth_to_btc: 10,
        btc_max_eth: this.max_eth_price / 0.1, //use
        btc_drop: 40, //use
        low_btc_price: this.max_btc_price*(1-this.btc_drop)
    }

    let Point1 = new Point(0, 0, 0);
    let Point2 = new Point(0, 0, 0);
    let Point3 = new Point(0, 0, 0);
    let Point4 = new Point(0, 0, 0);
    let Point5 = new Point(0, 0, 0);
    let Point6 = new Point(0, 0, 0);
    let Point7 = new Point(0, 0, 0);
    let Point8 = new Point(0, 0, 0);
    let Point9 = new Point(0, 0, 0);
    let Point10 = new Point(0, 0, 0);



    Point1.eth_price = val_eth_sell1
    Point1.percent_eth_sell = val_percent_eth_sell1
    Point1.percent_put_buy = val_percent_put_buy1

    Point2.eth_price = val_eth_sell2
    Point2.percent_eth_sell = val_percent_eth_sell2
    Point2.percent_put_buy = val_percent_put_buy2

    Point3.eth_price = val_eth_sell3
    Point3.percent_eth_sell = val_percent_eth_sell3
    Point3.percent_put_buy = val_percent_put_buy3

    Point4.eth_price = val_eth_sell4
    Point4.percent_eth_sell = val_percent_eth_sell4
    Point4.percent_put_buy = val_percent_put_buy4

    Point5.eth_price = val_eth_sell5
    Point5.percent_eth_sell = val_percent_eth_sell5
    Point5.percent_put_buy = val_percent_put_buy5

    Point6.eth_price = val_eth_sell6
    Point6.percent_eth_sell = val_percent_eth_sell6
    Point6.percent_put_buy = val_percent_put_buy6

    Point7.eth_price = val_eth_sell7
    Point7.percent_eth_sell = val_percent_eth_sell7
    Point7.percent_put_buy = val_percent_put_buy7

    Point8.eth_price = val_eth_sell8
    Point8.percent_eth_sell = val_percent_eth_sell8
    Point8.percent_put_buy = val_percent_put_buy8

    Point9.eth_price = val_eth_sell9
    Point9.percent_eth_sell = val_percent_eth_sell9
    Point9.percent_put_buy = val_percent_put_buy9

    Point10.eth_price = val_eth_sell10
    Point10.percent_eth_sell = val_percent_eth_sell10
    Point10.percent_put_buy = val_percent_put_buy10
    
    
    obj_max_points.eth_amount = val_amount
    obj_max_points.max_eth_price = val_eth_price
    obj_max_points.max_eth_to_btc = val_max_eth_to_btc
    obj_max_points.btc_drop = val_btc_drop


    arr_max_points = [obj_max_points];
    arr_sell_points = [];
    for (let i = 0; i < 10; i++){
        let new_class = eval('Point' + String(i+1))
        arr_sell_points.push(new_class)
    }
    
    calculate(arr_max_points, arr_sell_points)

    console.log(arr_puts)
    console.log(totals)


    id_pre_peak_money.value = totals[1].pre_peak
    id_post_peak_money.value = totals[1].post_peak
    id_mara_put_money.value = totals[1].puts
    id_total_moners.value = totals[1].total



}

function calculate(arr_max_points, arr_sell_points){
    arr_puts = []
    
    let accumulator = 0
    let current
    remaining_total = 0
    accumulator_remaining = 0

    for (let i = 0; i < arr_sell_points.length; i++) {
        current = arr_sell_points[i].eth_price*(arr_sell_points[i].percent_eth_sell/100)*arr_max_points[0].eth_amount
        accumulator += current
        put_value(i, current, arr_sell_points[i].eth_price * 10)
        
        if (arr_max_points[0].max_eth_price === arr_sell_points[i].eth_price) {
            for (let j = i+1; j < arr_sell_points.length; j++) {
                accumulator_remaining += arr_sell_points[j].percent_eth_sell
                
                current = arr_sell_points[i].eth_price*0.75*(arr_sell_points[j].percent_eth_sell/100)*arr_max_points[0].eth_amount
                put_value(j, current, arr_sell_points[i].eth_price * 0.75 * 10)
            }
            remaining_total = 0.75 * arr_max_points[0].max_eth_price * (accumulator_remaining/100) * arr_max_points[0].eth_amount
            break
        }
    }

    let accumulator_money_in = 0
    let accumulator_money_out = 0
    for (let i = 0; i < arr_puts.length; i++) {
        accumulator_money_in += arr_puts[i].money_in
        accumulator_money_out += arr_puts[i].money_out
    }
    put_profit = accumulator_money_out-accumulator_money_in
    
    let puts = {
        in: accumulator_money_in,
        out: accumulator_money_out
    }
    let total_profit = accumulator + remaining_total - accumulator_money_in + accumulator_money_out

    
    let breakdown = {
        pre_peak: accumulator.toFixed(2),
        post_peak: remaining_total.toFixed(2),
        puts: (puts.out-puts.in).toFixed(2),
        total: total_profit.toFixed(2)
    }

    totals = [puts, breakdown]
    return
}

function put_value(index_value, current, strike_btc){
    let peak_btc = arr_max_points[0].max_eth_price*arr_max_points[0].max_eth_to_btc //arr_max_points[0].btc_max_eth
    //let strike_btc = arr_sell_points[index_value].eth_price * 10
    let percent_drop = arr_max_points[0].btc_drop
    let low_btc = peak_btc * ((100-percent_drop)*0.01)
    let value_change = (low_btc - strike_btc) / strike_btc * 100
    let put_profit_percent = 0.09 * 0.9787 **(-305 + value_change) - 100
    
    let money_in_put = current * (arr_sell_points[index_value].percent_put_buy / 100)
    let money_out_put = money_in_put * ((100+put_profit_percent)/100)
    
    //debugging
    // console.log(`peak_btc: ${peak_btc}`)
    // console.log(`percent_drop: ${percent_drop}`)
    // console.log(`low_btc: ${low_btc}`)
    // console.log(`value_change: ${value_change}`)
    // console.log(`put_profit_percent: ${put_profit_percent}`)
    // console.log(`money_in_put: ${money_in_put}`)
    // console.log(`money_out_put: ${money_out_put}`)

    console.log(money_out_put)

    let obj_puts = {
        money_in: money_in_put,
        money_out: money_out_put
    }

    arr_puts.push(obj_puts)
    
    
    
    return
}
