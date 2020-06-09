const express = require('express');
const path = require("path");



const app = express();
// const port = process.env.PORT || 8081;
app.use(express.static(path.join(__dirname, "client")));
// const router = express.Router();


app.get('/', (req, res) => {
  // root; can redirect?

  const target = process.env.TARGET || 'World';
  res.status(200).send(`Hello ${target}!`);
});

// app.listen(port, () => {
//   console.log('App listening on port', port);
// });

module.exports = app;