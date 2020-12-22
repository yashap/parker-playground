interface Item {
  price: number;
  qty: number;
}

const getSubTotal = (items: Item[]) => {
  if (items.length) {
    const subtotals = items.map((item) => item.price * item.qty);
    return subtotals.reduce((accum, value) => accum + value);
  }
  return 0;
};

export default getSubTotal;
