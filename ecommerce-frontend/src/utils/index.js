export const generateUniqueProductId = (product, company) => {
  return `${company}-${product.productName}-${product.price}`;
};
