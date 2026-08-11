import { getStockData } from "./fakeStockApi.js";

const stockNameElem = document.getElementById("stock-name");
const stockSymbolElem = document.getElementById("stock-symbol");
const stockPriceElem = document.getElementById("stock-price");
const stockTimeElem = document.getElementById("stock-time");

function updateStockInfo() {
  const stockData = getStockData();
  stockNameElem.textContent = stockData.name;
  stockSymbolElem.textContent = stockData.symbol;
  stockPriceElem.textContent = stockData.price;
  stockTimeElem.textContent = stockData.time;

  updateStockPriceArrow(
    parseFloat(stockData.price.slice(1)),
    parseFloat(stockData.price.slice(1)),
  );
  return stockData;
}

function updateStockPriceArrow(oldStockPrice, newPrice) {
  const stockPriceArrowElem = document.getElementById("stock-price-arrow");
  const stockData = getStockData();

  oldStockPrice = parseFloat(stockData.price.slice(1));

  if (newPrice > oldStockPrice) {
    stockPriceArrowElem.textContent = "▲";
    stockPriceArrowElem.style.color = "limegreen";
  } else if (newPrice < oldStockPrice) {
    stockPriceArrowElem.textContent = "▼";
    stockPriceArrowElem.style.color = "red";
  } else {
    stockPriceArrowElem.textContent = "►";
    stockPriceArrowElem.style.color = "gray";
  }
  return newPrice;
}
setInterval(updateStockInfo, 5000);
updateStockInfo();
let newPrice = parseFloat(getStockData().price.slice(1));
