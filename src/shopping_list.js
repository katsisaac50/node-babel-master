// Shopping list class
// Add items
// Remove items
//total cost

/**
 * Class for create shopping list
 */
export class ShoppingList {
    constructor() {
        this.list_of_item = [];
    }
    addItem(shopping_item) {
        //check the duplicate
        let exist = false;
        this.list_of_item.forEach((item) => {
            if (shopping_item.name === item.name) {
                console.log(shopping_item.name, "item already exsited !");
                exist = true;
                return;
            }

        });
        if (!exist) {
            this.list_of_item.push(shopping_item);
            console.log(shopping_item.name, "added!");
        }
        //this.list_of_item.push(shopping_item);

    }
    removeItem(name) {
        /* if(this.list_of_item(i)){
            this.list_of_item.splice(i,1);
        } */
        let getIndex;
        this.list_of_item.filter((data, index) => {
            if (name === data.name) {
                getIndex = index;
            }
            return getIndex;
        });
        this.list_of_item.splice(getIndex, 1);
    }
    totalPrice() {
        let total_price = 0;

        for (let i = 0; i < this.list_of_item.length; i++) {
            total_price = total_price + this.list_of_item[i].amount * this.list_of_item[i].price;
        }
        return total_price;
    }
}
export class ShoppingItem {
    /**
     * 
     * @param {string} name is the name of the shopping items
     * @param {number} amount is the amount of the shopping items
     * @param {number} amount is the price of the one item, currency is DKK
     */

    constructor(name, amount, price) {
        this.name = name;
        this.amount = amount;
        this.price = price;
    }
}