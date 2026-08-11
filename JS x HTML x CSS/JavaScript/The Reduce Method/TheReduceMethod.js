import { itemsBoughtArr } from "./itemsBought.js";

function itemsBoughtTotal(itemsBoughtArr) {
  const total = itemsBoughtArr.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.priceUSD;
  }, 0);
  return total;
}

console.log(itemsBoughtTotal(itemsBoughtArr));
