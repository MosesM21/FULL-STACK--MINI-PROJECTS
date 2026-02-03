
function getStockData() {
    return {
        name: "TechCorp",
        symbol: "TC",
        price: Math.random() * 1000,
        time: new Date().toLocaleTimeString(),
    }
}

export { getStockData };