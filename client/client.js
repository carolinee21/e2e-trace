var express = require('express');
var cors = require('cors');
var app = express();
const fetch = require("node-fetch");

const cloudUrl = 'https://ardent-fusion-279020.wl.r.appspot.com';
const localUrl = 'http://localhost:8082'; 

app.use(cors());

app.get('/hello/:id', (req, res, next) => {
  res.json({msg: 'Hello world, we are CORS-enabled!'});
  search(req.params.id);
});

app.listen(8081, () => {
  console.log('CORS-enabled web server is listening on port 8081');
});

search = (productName) => {
    var request = localUrl + '/find-product/' + productName;
    console.log("request made: " + request);
    fetch(request).then(response => {
      console.log(response.text());
      let jsonResponse = response.json();
        //return response.text();
    });
}
