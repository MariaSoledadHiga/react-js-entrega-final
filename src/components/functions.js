import products from "./data.json";

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        categoryId
          ? products.filter((product) => product.category === categoryId)
          : products
      );
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === productId));
    }, 500);
  });
};
