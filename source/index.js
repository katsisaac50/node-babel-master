import { ShoppingList, Item, PremiumItem } from './shopping_list';
import { start } from 'repl';
import * as process from 'process';
console.log("process", process.argv);
let shopping_list = new ShoppingList();
if (process.argv[2] == 'add') {
    const new_item = new ShoppingItem(process.argv[3], process.argv[4], process.argv[5]);
    shopping_list.addItem(new_item);
    console.log(shopping_list.list_of_item);
}

// here I start to use my classes
const my_shopping_list = new ShoppingList();
const my_premium_shopping_list = new ShoppingList();
const total1 = new ShoppingList();
const item = new Item("Apple", 60);
const item2 = new Item("Oranges", 200);
const item3 = new Item("mango", 100);
const premium_item = new PremiumItem("Kebab", 150, 838373);

my_shopping_list.addItem(item);
my_shopping_list.addItem(item2);
my_shopping_list.addItem(item3);

my_premium_shopping_list.addItem(premium_item);
//const marcos_price = my_shopping_list.searchByName("Isaac");
//console.log('marcos_price', marcos_price);
console.log(my_shopping_list.list_of_items);
console.log(my_premium_shopping_list.list_of_items);
console.log(total1);
console.log("############### Shopping list total price ########");
console.log("Kr.", my_shopping_list.totalCost());