//CASOS DE USO DOS ITENS

// -> criar item com subtotal certo
async function createItem(name, type, price, quantity) {
  return {
    name,
    type,
    price,
    quantity,
    subtotal: () => price * quantity,
  };
}

export default createItem;
