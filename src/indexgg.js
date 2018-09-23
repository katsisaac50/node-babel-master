import express from 'express';

import bodyParser from 'body-parser';
import { ShoppingList, ShoppingItem } from './shopping_list';
const app = express();
// respond with "hello world" when a GET request is made to the homepage

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.static('public'))

const my_shopping_list = new ShoppingList();

app.get("/", (req, res) => {
    
});

/**
 * Get all the item in the shopping list
 */
app.get("/shopping_list", (req, res) => {
    
});

/**
 * Get a specific item from the shopping list
 */
app.get("/shopping_list/:id", (req, res) => {
    console.log(req.params.id);
    res.status(200).send(my_shopping_list.list_of_item);
});
/**
 * Add an item from the shopping list
 */
app.post("/shopping_list", (req, res) => {
    
});

/**
 * Delete an item from the shopping list
 */
app.delete("/shopping_list/:id", (req, res) => {
    console.log("one",req.params.id);
});
/*app.post('/', function(req, res) {
    console.log('this is a post');
    console.log("Body:", req.body);
    const item = new ShoppingItem(req.body.name, req.body.amount, req.body.price);
    my_shopping_list.addItem(item);
    console.log("This is my shopping list:", my_shopping_list.list_of_item);
    res.send(my_shopping_list.list_of_item);
});
app.get('/test', function(req, res) {
    console.log(req.query);
    res.send('this is another page');
});*/
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});