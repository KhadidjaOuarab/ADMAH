
const express = require('express');
const routerCity = express.Router();
const cityController = require('../Controllers/City.controller');

routerCity.get('/AllCities', cityController.getAllCities);
routerCity.post('/create', cityController.createCity);


module.exports = routerCity;