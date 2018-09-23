import express from 'express';
import bodyParser from 'body-parser';
import { ShoppingList, ShoppingItem } from './shopping_list'
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'))

const my_shopping_list = new ShoppingList();

/**
 * Index page
 */
app.get("/", (req, res) => {
    res.end("this is my index page")
})

/**
 * Get all the item in the shopping list
 */
app.get("/shopping_list", (req, res) => {
    res.status(200).send(my_shopping_list.list_of_item)
})

/**
 * Get a specific item from the shopping list
 */
app.get("/shopping_list/:id", (req, res) => {
    if (my_shopping_list.list_of_item[req.params.id]) {
        res.status(200).send(my_shopping_list.list_of_item[req.params.id])
    } else {
        res.status(404).send(`The item with id ${req.params.id} was not found`);
    }
})

/**
 * Add an item from the shopping list
 */
app.post("/shopping_list", (req, res) => {
    if(!req.body.name||!req.body.amount||!req.body.price){
        res.status(422).send(my_shopping_list.list_of_item)
    }
    
    const item = new ShoppingItem(req.body.name, req.body.amount, req.body.price);
    my_shopping_list.addItem(item);
    res.status(200).send(my_shopping_list.list_of_item);
})

/**
 * Edit an item from the shopping list
 */
app.patch("/shopping_list/:id", (req, res) => {
    console.log(my_shopping_list.list_of_item[req.params.id])
    if (my_shopping_list.list_of_item[req.params.id]) {
        const item = my_shopping_list.editItem(req.params.id, req.body);
        res.status(200).send(item);
    } else {
        res.status(404).send(`The item with id ${req.params.id} was not found`);
    }
})

/**
 * Delete an item from the shopping list
 */
app.delete("/shopping_list/:id", (req, res) => {
    if (my_shopping_list.list_of_item[req.params.id]) {
        my_shopping_list.removeItem(req.params.id);
        res.status(200).send(my_shopping_list.list_of_item);
    } else {
        res.status(404).send(`The item with id ${req.params.id} was not found`);
    }
});


app.listen(3002, function () {
 console.log('Example app listening on port 3000!');
});
