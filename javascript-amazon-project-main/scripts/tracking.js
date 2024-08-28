import { loadProducts } from "../data/products.js"; 

loadProducts(renderTracking);

function renderTracking() {
  const url = new URL(window.location.href);
  const orderId = url.searchParams.get('orderId');
  const productId = url.searchParams.get('productId');

  console.log(orderId);
  console.log(productId);
}