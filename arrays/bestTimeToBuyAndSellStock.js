/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min_price = Infinity;
    var max_profit = 0;
    var calculated_profit=0;
    prices.forEach((price)=>{
        if(price <= min_price){
            min_price = price;
        }
        else{
            calculated_profit = price - min_price;
            max_profit < calculated_profit ? max_profit = calculated_profit : ()=>{};
        }
        
    })
    return max_profit;
};