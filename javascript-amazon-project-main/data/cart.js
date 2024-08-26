export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId: '1'
  }, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryOptionId: '2'
  }];
}

export function saveToStorage () {
  localStorage.setItem('cart', JSON.stringify(cart));
}

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
      quantity,
      deliveryOptionId: '1'
    });
  };

  saveToStorage();
};

export function addToCart2 (productId) {
  
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity ++;
  } else {
    cart.push({
      // productId: productId,
      productId,
      quantity: 1,
      deliveryOptionId: '1'
    });
  };

  saveToStorage();
};

export function removeFromCart (productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

export function updateQuantity (productId, newQuantity) {
  let matchingItem;

  cart.forEach(cartItem => {
    if(productId === cartItem.productId) {
      matchingItem = cartItem;
    };    
  });
  matchingItem.quantity = newQuantity;
  
  saveToStorage();

  // console.log(matchingItem);
}

export function updateDeliveryOption (productId, deliveryOptionId) {
  let matchingItem;

  cart.forEach(cartItem => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    };
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}

export function updateCartQuantity () {

  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
};

export function loadCart (fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    console.log(xhr.response);    
    fun();
  })

  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send();
};

export async function loadCartFetch () {
  const response = await fetch('https://supersimplebackend.dev/cart');
  const text = await response.text();
  console.log(text);
  // console.log(await response.text());
  return text;
};