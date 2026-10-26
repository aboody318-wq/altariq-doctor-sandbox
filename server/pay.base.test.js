import test from 'node:test';
import assert from 'node:assert/strict';
import { orderTotal } from './pay.js';

test('an order with shipping adds its cost', () => {
  assert.equal(orderTotal({ items: [{ price: 10, qty: 2 }], shipping: { cost: 5 } }), 25);
});
