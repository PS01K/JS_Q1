import { orders } from "../data/orders.js";
import { formatCurrency } from "./utils/money.js";
import { getProduct, loadProducts } from "../data/products.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

console.log(orders);
loadProducts(renderOrders);

function renderOrders () {
  let orderHTML = '';

  orders.forEach(order => {
    orderHTML += `
    <div class="order-container">    
      <div class="order-header">
        <div class="order-header-left-section">
          <div class="order-date">
            <div class="order-header-label">Order Placed:</div>
            <div>${getDate(order.orderTime)}</div>
          </div>
          <div class="order-total">
            <div class="order-header-label">Total:</div>
            <div>$${formatCurrency(order.totalCostCents)}</div>
          </div>
        </div>
  
        <div class="order-header-right-section">
          <div class="order-header-label">Order ID:</div>
          <div>${order.id}</div>
        </div>
      </div>
  
      <div class="order-details-grid">
        ${loadProductsHTMl(order)}
      </div>
    </div>
    `;
  });

  document.querySelector('.js-orders-grid').innerHTML += orderHTML;
  
  function loadProductsHTMl (order) {
    let productsHTML = '';
    order.products.forEach(product => {
      const matchingProduct = getProduct(product.productId);
  
      productsHTML += `
      <div class="product-image-container">
        <img src="${matchingProduct.image}">
      </div>
  
      <div class="product-details">
        <div class="product-name">
          ${matchingProduct.name}
        </div>
        <div class="product-delivery-date">
          Arriving on: ${getDate(product.estimatedDeliveryTime)}
        </div>
        <div class="product-quantity">
          Quantity: ${product.quantity}
        </div>
        <button class="buy-again-button button-primary">
          <img class="buy-again-icon" src="images/icons/buy-again.png">
          <span class="buy-again-message">Buy it again</span>
        </button>
      </div>
  
      <div class="product-actions">
        <a href="tracking.html">
          <button class="track-package-button button-secondary">
            Track package
          </button>
        </a>
      </div>
      `;
    });
    return productsHTML;
  }

  function getDate(date) {
    return dayjs(date).format('MMMM D')
  }
}
