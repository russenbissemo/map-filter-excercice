// Ques 5 -Best Time to Buy and Sell Stocks
// You are given an array prices where prices[i] is the price of a given stock
// on the ith day
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock
// Return the maximum profit , if you cannot achieve any profit , return O.

// Input : prices = [7, 1, 5 , 3, 6, 4] ---->>>> Output : 5;
// Iput : prices = [7, 6, 4, 3, 1] ->>>>> Output : 0;

const maxProfit1 = (prices) => {
  let globalProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const currentProfit = prices[j] - prices[i];
      if (currentProfit > globalProfit) globalProfit = currentProfit;
    }
  }
  return globalProfit;
};

// console.log(maxProfit([8, 12, 6, 20, 1]));

const maxProfit = (prices) => {
  let minStockPurchasePrice = prices[0] || 0;
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minStockPurchasePrice) {
      minStockPurchasePrice = prices[i];
    }
    profit = Math.max(profit, prices[i] - minStockPurchasePrice);
  }
  return profit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
