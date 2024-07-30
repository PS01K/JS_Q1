export const cart = [];

export function addToCart (productId) {
  
  let matchingItem;

  const quantityValue = document.querySelector(`.js-quantity-selector-${productId}`);
  const quantity = Number(quantityValue.value);


  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      // productId: productId,
      productId,
      quantity
    });
  };
};