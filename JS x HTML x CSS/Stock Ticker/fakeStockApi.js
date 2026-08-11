function getStockData() {
  const stockData = {
    name: "TechCorp",
    symbol: "TC",
    price: `K${(Math.random() * 1000).toFixed(2)}`,
    time: new Date().toLocaleTimeString(),
  };
  return stockData;
}

export { getStockData };
