import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts, products } from "../data/products.js";
// import '../data/cart-class.js';

loadProducts(() => {
  renderOrderSummary(); 
  renderPaymentSummary(); 
  renderCheckoutHeader(); 
});