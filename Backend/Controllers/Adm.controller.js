const AdmModel = require("../Models/Adm.model");
const admController = {};
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken.js");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const SECRET = process.env.JWT_SECRET;

admController.getAllAdms = async function (req, res) {
  console.log("GET /getAllUsers");
  let adms;
  try {
    console.log("inside try GET /getAllUsers");
    adms = await AdmModel.find();
    console.log(adms);
    res.send(adms);
  } catch (error) {
    res.status(500).send(error);
  }
};
/*
admController.getAllAdmsByFilter = async function (req, res) {
  console.log("GET /getAllUsers");
  let adms;
  try {
    console.log("inside try GET /getAllUsers");
    adms = await AdmModel.findById(req.params.documentNumber);
    console.log(adms);
    res.send(adms);
  } catch (error) {
    res.status(500).send(error);
  }
};*/

/*
 exerciceController.getExercicePlusStudent  = async function (req, res) {
   console.log("GET /getExercicePlusStudent");
   try {
    // if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    const exo = await Exercice.findById(req.params.id).populate("students")
     res.json(exo);//}
   } catch (error) {
     res.status(500).send(error);
   }
 };*/
module.exports = admController;
