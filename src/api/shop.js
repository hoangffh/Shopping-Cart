const _products = [
  { id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 2 },
  { id: 2, title: "H&M T-Shirt White", price: 10.99, inventory: 10 },
  { id: 3, title: "Charli XCX - Sucker CD", price: 19.99, inventory: 5 },
  { id: 4, title: "H&M T-Shirt White", price: 10.99, inventory: -2 },
  {
    id: 5,
    title: "Charli XCX - Sucker CD Sneaker",
    price: 19.99,
    inventory: -3
  },
  {
    id: 6,
    title: "H&M T-Shirt White IphoneSmart",
    price: 10.99,
    inventory: -2
  },
  {
    id: 7,
    title: "Charli XCX - Sucker CD SamSung Galaxy",
    price: 19.99,
    inventory: -3
  }
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 100);
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      Math.random() > 0.5 || navigator.webdriver ? cb() : errorCb();
    }, 100);
  }
};
