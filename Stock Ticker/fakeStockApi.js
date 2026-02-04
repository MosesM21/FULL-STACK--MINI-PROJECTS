
function getStockData() {
    const stockData = {
        name: "TechCorp",
        symbol: "TC",
        price: `K${(Math.random() * 1000).toFixed(2)}`,
        time: new Date().toLocaleTimeString(),
    }
    console.log(stockData);
    return stockData;
}

export { getStockData }