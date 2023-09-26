//Consider a given array [7,1,5,3,6,4] representing the stock prices of a particular company for the next 6 days. For instance, today's price is 7, tomorrow's is 1, and so on, with the price being 4 on the 6th day. Your task is to find the maximum profit that can be earned from buying and selling stocks within these 6 days. Additionally, please display both the buy price and the sale price to achieve this maximum profit

const guessStockPrice = (stockPrices) => {
  let maxDifference = 0;
  let orderDetails = {};

  for (let i = 0; i < stockPrices.length; i++) {
    for (let j = stockPrices.length - 1; j > 0; j--) {
      if (stockPrices[j] - stockPrices[i] > maxDifference) {
        maxDifference = stockPrices[j] - stockPrices[i];
        orderDetails["buyPrice"] = stockPrices[i];
        orderDetails["sellPrice"] = stockPrices[j];
      }
    }
  }
  console.log("Max profit: ", maxDifference, "Order details: ", orderDetails);
};
guessStockPrice([7, 1, 5, 3, 6, 4]);
guessStockPrice([12, 10, 25, 37, 26, 34]);
