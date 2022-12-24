//****************************** Main Objective **************** */
// To forward the supported requests and any information encoded in request URL to the appropriate controller functions 
// Route is a section of Express code that associates an HTTP verb (CRUD), a URL path and a function that is called to handle that pattern

const express = require('express');
const routerAdm = express.Router();
const admController = require('../Controllers/Adm.controller');
const verifyToken = require('../middleware/authMiddleware');
// Adding a couple of routes to the router using the get() method. After we export the route object

routerAdm.get('/AllAdms', admController.getAllAdms);
/*routerUser.post('/create', userController.createUser);
routerUser.post('/signup', userController.signup);
routerUser.post('/login', userController.login);
routerUser.route("/").post(userController.registerUser);
routerUser.get('/users', verifyToken);*/

//routerUser.post("/login", userController.authUser);


module.exports = routerAdm;