//ITEMS
const itemsBoughtArr = [
  {
    name: "Electric Chair",
    priceUSD: 40,
  },
  {
    name: "Hand-Cuffs",
    priceUSD: 25,
  },
];

function getTotalPrice(itemsBoughtArr) {
  const totalPrice = itemsBoughtArr.reduce((accumulator, currentItem) => {
    const total = accumulator + currentItem.priceUSD;
    return total;
  }, 0);
  return totalPrice;
}

const totalPrice = getTotalPrice(itemsBoughtArr);

console.log(totalPrice);
