import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

//criando dois itens
const item1 = await createItem("hotwheels ferrari", "Toy", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", "Toy", 39.99, 3);
const item3 = await createItem("pista hotwheels", "Toy", 299.99, 1);
const item4 = await createItem("Palmeiras shirt", "Clothes", 349.99, 1);

// adicionei dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);

// await cartService.removeItem(myCart, item2);
// await cartService.removeItem(myCart, item2);
// await cartService.removeItem(myCart, item2);

await cartService.displaycart(myCart);
await cartService.displaycartByType(myCart, "Clothes");
await cartService.displaycartByType(myCart, "Toy");
// deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);
await cartService.calculateTotal(myCart);
