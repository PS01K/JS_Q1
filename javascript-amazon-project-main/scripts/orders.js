import { orders } from "../data/orders.js";
import { formatCurrency } from "./utils/money.js";
// import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

console.log(orders);

function renderOrders () {
  let orderHTML = '';

  orders.forEach(order => {
    orderHTML = `
    <div class="order-container">
      
      <div class="order-header">
        <div class="order-header-left-section">
          <div class="order-date">
            <div class="order-header-label">Order Placed:</div>
            <div>${order.orderTime}</div>
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
        <div class="product-image-container">
          <img src="images/products/athletic-cotton-socks-6-pairs.jpg">
        </div>
  
        <div class="product-details">
          <div class="product-name">
            Black and Gray Athletic Cotton Socks - 6 Pairs
          </div>
          <div class="product-delivery-date">
            Arriving on: August 15
          </div>
          <div class="product-quantity">
            Quantity: 1
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
  
        <div class="product-image-container">
          <img src="images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg">
        </div>
  
        <div class="product-details">
          <div class="product-name">
            Adults Plain Cotton T-Shirt - 2 Pack
          </div>
          <div class="product-delivery-date">
            Arriving on: August 19
          </div>
          <div class="product-quantity">
            Quantity: 2
          </div>
          <button class="buy-again-button button-primary">
            <img class="buy-again-icon" src="images/icons/buy-again.png">
            <span class="buy-again-message">Buy it again</span>
          </button>
        </div>
  
        <div class="product-actions">
          <a href="tracking.html?orderId=123&productId=456">
            <button class="track-package-button button-secondary">
              Track package
            </button>
          </a>
        </div>
      </div>
    </div>
    `;
  });

  document.querySelector('.js-orders-grid').innerHTML = orderHTML;
}