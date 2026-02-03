import { getStockData } from './fakeStockApi.js';



function renderStockTicker(stockData) {
    const stockDisplayName = document.getElementById('stock-name');
    const stockDisplaySymbol = document.getElementById('stock-symbol');
    const stockDisplayPrice = document.getElementById('stock-price');
    const stockDisplayPriceIcon = document.getElementById('stock-price-arrow');

    stockDisplayName.textContent = getStockData().name;
}


