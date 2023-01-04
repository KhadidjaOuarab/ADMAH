const AdmModel = require("../Models/Adm.model");
const admController = {};
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken.js");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const SECRET = process.env.JWT_SECRET;

admController.getAllAdms = async function (req, res) {
  //console.log("GET /getAllUsers");
  let adms;
  try {
    // console.log("inside try GET /getAllUsers");
    adms = await AdmModel.find();
    //  console.log(adms);
    res.send(adms);
  } catch (error) {
    res.status(500).send(error);
  }
};
/**************************************************************************************** */
admController.getAllAdmsByFilter = async function (req, res) {
  // console.log("GET /getAllUsers");
  let adms;
  try {
    // console.log("inside try GET /getAllUsers");
    adms = await AdmModel.find();
    // console.log(adms);
    res.send(adms);
  } catch (error) {
    res.status(500).send(error);
  }
};

admController.getAllAdmsByFilterDocNum = async function (req, res) {
  // console.log("GET /getAllUsers");
  let adms;
  try {
    // console.log("inside try GET /getAllUsers");
    adms = await AdmModel.find({ documentNumber: req.params.documentNumber });
    // console.log(adms);
    res.send(adms);
  } catch (error) {
    res.status(500).send(error);
  }
};

admController.getAllAdmsByFilterAgent = async function (req, res) {
  // console.log("GET /getAllUsers");
  let adms;
  try {
    // console.log("inside try GET /getAllUsers");
    adms = await AdmModel.find({ agentCode: req.params.agent });
    // console.log(adms);
    res.send(adms);
  } catch (error) {
    res.status(500).send(error);
  }
};

admController.getAllAdmsByFilterAdmNum = async function (req, res) {
  // console.log("GET /getAllUsers");
  let adms;
  try {
   console.log("inside try GET /getAllUsers");
    console.log(req.params.admNumber);
    adms = await AdmModel.find({ admNo: req.params.admNumber });
    //  console.log(adms);
    res.send(adms);
  } catch (error) {
    res.status(500).send(error);
  }
};

admController.getAllAdmsByFilterAdmTypes = async function (req, res) {
  //  console.log("GET /getAllUsers");
  let adms;
  try {
    // console.log("inside try GET /getAllUsers");
    adms = await AdmModel.find({ admType: req.params.selectedAdmType });
    // console.log(adms);
    res.send(adms);
  } catch (error) {
    res.status(500).send(error);
  }
};

admController.getAllAdmsByFilterUser = async function (req, res) {
  //  console.log("GET /getAllUsers");
  let adms;
  try {
    //  console.log("inside try GET /getAllUsers");
    adms = await AdmModel.find({ username: req.params.user });
    //  console.log(adms);
    res.send(adms);
  } catch (error) {
    res.status(500).send(error);
  }
};

admController.deleteADM = async function (req, res) {
  //  console.log("GET /getAllUsers");
  let adm;
  try {
    //  console.log("inside try GET /getAllUsers");
    adm = await AdmModel.findByIdAndDelete(req.params.id );
    //  console.log(adms);
    res.send(adm);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = admController;
