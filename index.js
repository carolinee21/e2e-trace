const express = require('express');
const app = express();
const router = express.Router();


app.get('/', (req, res) => {
    // root; can redirect?
  console.log('Hello world received a request.');

  const target = process.env.TARGET || 'World';
  res.send(`Hello ${target}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('App listening on port', port);
});

module.exports = app;