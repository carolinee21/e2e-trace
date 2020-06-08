import FoodFinder from './FoodFinder.js';
const express = require('express');
const app = express();
const path = require("path");

//let cors = require('cors');
let finder = new FoodFinder();

app.get('/', (req, res) => {
  console.log('Home page');

  res.send('Welcome! Please navigate to http://localhost:8081/find-product/flour');
});

app.get("/find-product/:product", (req, res, next) => {
    console.log('app.get');
    let dict = finder.findProduct(req.params.product);
    res.send(dict);
});

module.exports = app;

function init() {
    
    //app.use(cors);
    app.use(express.static(path.join(__dirname, '../client')));
    console.log(__dirname);

    const port = process.env.PORT || 8081;
    app.listen(port, () => {
        console.log('App listening on port', port);
    });
}

init();
