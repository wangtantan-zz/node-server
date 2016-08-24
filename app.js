'use strict'

const express = require('express');
const config = require('config');
const app = express();

console.log(config);

app.get('/', (req, res, next) => {
  console.log(req);
  res.send('Hello World');
});

console.log(`listening port ${config.port}`);
app.listen(config.port);
