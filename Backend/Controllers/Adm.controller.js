const AdmModel = require("../Models/Adm.model");
const admController = {};
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const CircularJSON = require("circular-json");
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
    adm = await AdmModel.findByIdAndDelete(req.params.id);
    //  console.log(adms);
    res.send(adm);
  } catch (error) {
    res.status(500).send(error);
  }
};

admController.createADM = async function (req, res) {


  const agentCode = req.body[0].agentCode;
  const documentNumber = req.body[0].documentNumber;
  const couponNumber = req.body[0].couponNumber;
  const admType = req.body[0].admType;
  const issueCity = req.body[0].issueCity;
  const issueDate = req.body[0].issueDate;
  const flightNumber = req.body[0].flightNumber;
  const flightDate = req.body[0].flightDate;
  const froms = req.body[0].froms;
  const tos = req.body[0].tos;
  const exchangeNumber = req.body[0].exchangeNumber;
  const exchangedDate = req.body[0].exchangedDate;
  const couponNumberExchange = req.body[0].couponNumberExchange;
  const agentCodeExchange = req.body[0].agentCodeExchange;
  const refundNumber = req.body[0].refundNumber;
  const refundDate = req.body[0].refundDate;
  const couponNumberRefund = req.body[0].couponNumberRefund;
  const agentCodeRefund = req.body[0].agentCodeRefund;
  const admNo = req.body[0].admNo;
  const anomaly = req.body[0].anomaly;
  const currencyCode = req.body[0].currencyCode;
  const totalAmount = req.body[0].totalAmount;
  //const username = req.body[0].username;
 
  
 

  const products = 
    {
      admNo: admNo,
      agentCode: agentCode["Agency Code"],
      documentNumber: documentNumber,
      couponNumber: couponNumber,
      admType: admType["name"],
      issueCity: issueCity["City Code Alpha"],
      issueDate: issueDate,
      flightNumber: flightNumber,
      flightDate: flightDate,
      froms: froms["City Code Alpha"],
      tos: tos["City Code Alpha"],
      exchangeNumber: exchangeNumber,
      exchangedDate: exchangedDate,
      couponNumberExchange: couponNumberExchange,
      agentCodeExchange: agentCodeExchange["Agency Code"],
      refundNumber: refundNumber,
      refundDate: refundDate,
      couponNumberRefund: couponNumberRefund,
      agentCodeRefund: agentCodeRefund["Agency Code"],
      anomaly: anomaly,
      currencyCode: currencyCode["Currency Alpha Code"],
      totalAmount: totalAmount,
     // username: username,
     
     
      
     
    }
  ;
  console.log("admadmadmadmadmadmadmadmadmadmadmadm");
  console.log(req.body[0])
  console.log("admadmadmadmadmadmadmadmadmadmadmadm");
  const adm = new AdmModel(products);
 
  try {
    await adm.save();
    console.log("saved successefully ");

  } catch (error) {
    res.status(500).send(error);

    let e = error;
    if (error.response) {
      e = error.response.data; // data, status, headers
      if (error.response.data && error.response.data.error) {
        e = error.response.data.error; // my app specific keys override
      }
    } else if (error.message) {
      e = error.message;
    } else {
      e = "Unknown error occured";
    }
    console.log(e);
  }
};

module.exports = admController;
