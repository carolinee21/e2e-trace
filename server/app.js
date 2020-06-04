const express = require('express');
import FoodFinder from 'FoodFinder';
const app = express();
let cors = require('cors');

app.get('/', (req, res) => {
    // root; can redirect?
  console.log('Hello world received a request.');

  const target = process.env.TARGET || 'World';
  res.send(`Hello ${target}!`);
});


// module.exports = app;

function init() {
    let finder = new FoodFinder();
    const port = process.env.PORT || 8081;
    app.listen(port, () => {
        console.log('App listening on port', port);
    });
}

init();