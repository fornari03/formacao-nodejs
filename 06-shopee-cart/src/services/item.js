//CASOS DE USO DOS ITENS

// -> criar item com subtotal certo
async function createItem(name, type, price, quantity) {
  return {
    name,
    type,
    price,
    quantity,
    coupon: false,
    subtotal: () => price * quantity,
  };
}

async function createCoupon(name, type, discount) {
  return {
    name,
    type,
    discount,
    coupon: true,
  };
}

export { createItem, createCoupon };
