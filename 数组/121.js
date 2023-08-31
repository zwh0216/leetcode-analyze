/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices.length) return 0
  let maxProfit = 0
  let minPrice = prices[0]
  for (const curPrice of prices) {
    if (curPrice < minPrice){
      minPrice = curPrice
    }
    const curProfit = curPrice - minPrice
    if(curProfit > maxProfit){
      maxProfit = curProfit
    }
  }
  return maxProfit
};

const test = () => {
  const prices = [7,1,5,3,6,4]
  const maxPro = maxProfit(prices)
  console.log('maxPro ->', maxPro);
}
test()