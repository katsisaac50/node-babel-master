// Shopping list class
// Add items
// Remove items
//total cost

/**
 * Class for create shopping list
 */
export class ShoppingList {

    constructor() {
        this.list_of_items = [];
    }

    /**
     * Add item to shopping list
     * @param {*} item is an object that reppresnt shopping list
     * @description
     * first create a new item with the class Item
     * 
     */
    addItem(item) {
        // I need to check if contact exist
        let exist = false;
        this.list_of_items.forEach((item_in_the_list) => {
            exist = (item.name === item_in_the_list.name || item.price === item_in_the_list.price)
        });
        if (exist) {
            // do nothing
        } else {
            this.list_of_items.push(item);
        }
    }

    /**
     * Remove item at specific index
     * @param {number} i is the index of the array of the shopping list
     */
    removeItem(i) {
        if (this.list_of_items[i]) {
            this.list_of_items.splice(i, 1);
        }
    }

    /**
     * remove all items
     */
    removeAllItems() {
        this.list_of_items = [];
    }
    totalCost() {

        let total_price = 0;
        for (let i = 0; i < this.list_of_items.length; i++)
            total_price += this.list_of_items[i].price;
        return total_price;
    };
    /*totalCost(item) {
        function totalCost() {
            let total = 0;
            for (let i = 0; i < this.list_of_items.length; i++)
                total += this.list_of_items[i].price;
            return total;
        }

    };*/

    /**
     * 
     * @param {string} name of item
     */
    searchByName(name) {
        let price;
        this.list_of_items.forEach((item) => {
            if (item.name === name) {
                price = item.price;
            }
        });
        return price;
    }
}

export class ShoppingItem {
    /**
     * 
     * @param {string} name is the name of the item
     * @param {number} price is the cost of the item
     */
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

export class PremiumItem extends Item {
    /**
     * 
     * @param {string} name is the name of the item
     * @param {number} price is the cost of the item
     * @param {number} special_price is the cost of the premium item
     */
    constructor(name, price, special_price) {
        super(name, price);
        this.special_price = special_price;
    }
}