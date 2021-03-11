const express = require('express');
var cool = require('cool-ascii-faces');

const app = express();

app.use((req, res, next) => {
    console.log(cool() + ' First middleware');
    next();
});

app.use((req, res, next) => {
   res.send(cool() + ' Hello from express!');
});

module.exports = app;
