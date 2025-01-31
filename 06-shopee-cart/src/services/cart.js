//quais açoes meu carrinho pode fazer

//CASOS DE USO
// ✅ -> adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// ✅ -> calcular o total do carrinho
async function calculateTotal(userCart) {
  console.log("\nShopee Cart TOTAL IS:");
  const couponIdx = userCart.findIndex((item) => item.type === "Coupon");
  if (couponIdx) {
    const coupon = userCart.splice(couponIdx, 1)[0];
    const total = userCart.reduce((total, item) => total + item.subtotal(), 0);
    const couponDiscountApplied = userCart.filter((a) => a.type === coupon.type).reduce((total, item) => total + item.subtotal(), 0)*coupon.discount;
    console.log(`🎁Total: ${total.toFixed(2)}`);
    console.log(`🎁Coupon discount applied in ${coupon.type}: ${couponDiscountApplied.toFixed(2)}`);
    console.log(`🎁Total with discount: ${(total - couponDiscountApplied).toFixed(2)}`);
    return;
  }
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁Total: ${result.toFixed(2)}`);
}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// -> ✅ remover um item - diminui um item
async function removeItem(userCart, item) {
  //1. encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  //2. Caso não encontre o item
  if (indexFound == -1) {
    console.log("item não encontrado");
    return;
  }

  //3. item > 1 subtrair um item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  //4. caso item = 1 deletar o item
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

// ✅ mostra todos os items do carrinho
async function displaycart(userCart) {
  console.log("\nShopee sorted cart list:");
  let sortedUserCart = [...userCart].filter((a) => !(a.coupon)).sort((a, b) => b.subtotal() - a.subtotal());
  sortedUserCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal = ${item.subtotal().toFixed(2)}`
    );
  });
}

async function displaycartByType(userCart, type) {
  console.log(`\nShopee sorted cart list by ${type}:`);
  let sortedUserCart = [...userCart].filter((a) => a.type === type && !(a.coupon)).sort((a, b) => b.subtotal() - a.subtotal());
  sortedUserCart.forEach((item, index) => {
    if (item.type === type) {
      console.log(
        `${index + 1}. ${item.name} - R$ ${item.price} | ${
          item.quantity
        }x | Subtotal = ${item.subtotal().toFixed(2)}`
      );
    }
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displaycart, displaycartByType };
