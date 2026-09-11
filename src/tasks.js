// AFTER - clear names, no magic numbers, no secrets
const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (!Number.isFinite(price) || !Number.isFinite(quantity)) {
    throw new TypeError("price and quantity must be finite numbers");
  }

  if (price < 0 || quantity < 0) {
    throw new RangeError("price and quantity must be greater than or equal to 0");
  }

  const subtotal = price * quantity;

  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

// The API key comes from an environment variable such as process.env.API_KEY.
// Secrets must never be hard-coded.

module.exports = { VIP_DISCOUNT, calculateTotal };
