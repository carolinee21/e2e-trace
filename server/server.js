import FoodFinder from './FoodFinder.js';
const express = require('express');
const app = express();
const path = require("path");

// OC Tracing
const tracing = require('@opencensus/nodejs');
const { StackdriverTraceExporter } = require('@opencensus/exporter-stackdriver');
const exporter = new StackdriverTraceExporter({projectId: "ardent-fusion-279020"});

tracing.registerExporter(exporter).start();

const tracer = tracing.tracer;


let cors = require('cors');
let finder = new FoodFinder();


function init() {
    // app.use(cors({credentials: true, origin: "http://localhost:8080"}));
    app.use(cors({credentials: true, origin: "https://ardent-fusion-279020.wl.r.appspot.com"}));
    app.use(express.json());
    app.use(express.static(path.join(__dirname, '../client/build')));
    console.log(__dirname);

    const port = process.env.PORT || 8082;
    app.listen(port, () => {
        console.log('App listening on port', port);
    });
}

init();

app.get('/', (req, res) => {

  res.send('Welcome to the FoodFinder backend! Please navigate to https://ardent-fusion-279020.wl.r.appspot.com/ to use the service');
});

app.get("/find-product/:product", async (req, res, next) => {
    console.log('app.get');
    tracer.startRootSpan({name: 'finding product...'}, async rootSpan => {
        let dict = await finder.findProduct(req.params.product);
        res.send(dict);
        rootSpan.end();
    });
    
    
});


module.exports = app;
