import { orderTotal } from './pay.js';
import assert from 'node:assert';

const orderWithoutShipping = {
  items: [{ price: 10, qty: 2 }]
};

assert.strictEqual(orderTotal(orderWithoutShipping), 20);
console.log('Test passed!');
