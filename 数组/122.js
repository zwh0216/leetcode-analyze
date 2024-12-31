/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices?.length;
  const list = [];
  for (let index = 0; index < len; index++) {
    let noStock, hasStock;
    if (index === 0) {
      noStock = 0;
      hasStock = -prices[index];
    } else {
      const yesterdayNoStock = list?.[index - 1]?.[0] ?? 0;
      const yesterdayHasStock = list?.[index - 1]?.[1] ?? 0;

      noStock = Math.max(yesterdayNoStock, yesterdayHasStock + prices[index]);
      hasStock = Math.max(yesterdayHasStock, yesterdayNoStock - prices[index]);
    }

    list.push([noStock, hasStock]);
  }

  return list[len - 1][0];
};

const mock1 = () => {
  const prices = [7, 1, 5, 3, 6, 4];
  const res = maxProfit(prices);
  console.log("mock1 res ->", res);
};
const mock2 = () => {
  const prices = [1, 2, 3, 4, 5];
  const res = maxProfit(prices);
  console.log("mock2 res ->", res);
};
const mock3 = () => {
  const prices = [7, 6, 4, 3, 1];
  const res = maxProfit(prices);
  console.log("mock3 res ->", res);
};

mock1();
mock2();
mock3();
