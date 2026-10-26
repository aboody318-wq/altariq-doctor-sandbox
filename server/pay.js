// A tiny order-total function used to try the doctor. It has ONE planted bug: an order without a `shipping` object crashes.
export function orderTotal(order) {
  const items = order.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  return items + order.shipping.cost;
}
