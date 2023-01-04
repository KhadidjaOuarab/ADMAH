
const express = require('express');
const routerCurrency = express.Router();
const currencyController = require('../Controllers/Currency.controller');

routerCurrency.get('/AllCurrency', currencyController.getAllCurrencies);
//routerCurrency.post('/create', currencyController.createCity);


module.exports = routerCurrency;