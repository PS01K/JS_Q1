import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCartFetch } from "../data/cart.js";
// import '../data/cart-class.js';

async function loadPage() {  
  try {
    // throw 'error1';

    Promise.all([
      await loadProductsFetch(),
      await loadCartFetch()
    ]);
  
  } catch (error) {
    console.log('Unexpected error. Please try again later.');
  }

  renderOrderSummary(); 
  renderPaymentSummary(); 
  renderCheckoutHeader();
}

loadPage();

// Promise.all([
//   loadProductsFetch(),
//   new Promise ((resolve) => {
//     loadCart(() => {
//       resolve();
//     })
//   })
  
// ]).then((values) => {
//   console.log(values); 
//   renderOrderSummary(); 
//   renderPaymentSummary(); 
//   renderCheckoutHeader();
// });

// new Promise ((resolve) => {
//   loadProducts(() => {
//     resolve('value1');
//   });

// }).then((value) => {
//   console.log(value);
//   return new Promise ((resolve) => {
//     loadCart(() => {
//       resolve();
//     })
//   }); 

// }).then(() => {
//   renderOrderSummary(); 
//   renderPaymentSummary(); 
//   renderCheckoutHeader();
// });

// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary(); 
//     renderPaymentSummary(); 
//     renderCheckoutHeader(); 
//   });
// });