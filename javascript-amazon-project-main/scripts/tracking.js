import { loadProducts } from "../data/products.js"; 
import { orders } from "../data/orders.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { getProduct } from "../data/products.js";


loadProducts(renderTracking);

function renderTracking() {
  const url = new URL(window.location.href);
  const orderId = url.searchParams.get('orderId');
  const productId = url.searchParams.get('productId');
  let order;
  let product;
  
  orders.forEach(element => {
    if (element.id === orderId) {
      order = element;
    }
  });
  
  order.products.forEach(element => {
    if (element.productId === productId) {
      product = element;
    }
  });
  
  const matchingProduct = getProduct(product.productId);
  
  let trackingHTML = ` 
    <a class="back-to-orders-link link-primary" href="orders.html">
      View all orders
    </a>

    <div class="delivery-date">
      Arriving on ${dayjs(product.estimatedDeliveryTime).format('dddd, MMMM D')}
    </div>
    
    <div class="product-info">
      ${matchingProduct.name}
    </div>

    <div class="product-info">
      Quantity: ${product.quantity}
    </div>

    <img class="product-image" src="${matchingProduct.image}">

    <div class="progress-labels-container">
      <div class="progress-label">
        Preparing
      </div>
      <div class="progress-label current-status">
        Shipped
      </div>
      <div class="progress-label">
        Delivered
      </div>
    </div>

    <div class="progress-bar-container">
      <div class="progress-bar"></div>
    </div>
    `;  

  document.querySelector('.js-order-tracking').innerHTML = trackingHTML;
}