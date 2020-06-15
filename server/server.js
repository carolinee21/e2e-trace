import FoodFinder from './services/FoodFinder.js';
import initTracer from './tracing.js';

const express = require('express');
const app = express();
const path = require("path");
const cors = require('cors');

//app.use(cors({credentials: true, origin: "http://localhost:5000"}));
app.use(cors({credentials: true, origin: "https://ardent-fusion-279020.wl.r.appspot.com"}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));
console.log(__dirname);


let tracer = initTracer();
let finder = new FoodFinder(tracer);

const port = process.env.PORT || 8082;
app.listen(port, () => {
    console.log('App listening on port', port);
});


app.get('/', (req, res) => {

  res.send('Welcome to the FoodFinder backend! Please navigate to https://ardent-fusion-279020.wl.r.appspot.com/ to use the service');
});

app.get("/find-product/:product", async (req, res, next) => {
    console.log('app.get');
    tracer.startRootSpan({name: 'product-search-request'}, async rootSpan => {
        let delay = 10;
        await new Promise(r => setTimeout(r, delay));
        let dict = await finder.findProduct(req.params.product);
        res.send(dict);
        rootSpan.end();
    });
});


module.exports = app;
