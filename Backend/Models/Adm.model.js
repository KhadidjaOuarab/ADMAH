// create users schema using mongoose
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// Define schema
// Schema allows you to define the fields stored in each document
const Schema = mongoose.Schema;

const admSchema = new Schema({
  admNo: {
    type: String,
    required: true,
    unique: true,
  },
  agentCode: {
    type: String,
    required: true,
  },
  documentNumber: {
    type: String,
    required: true,
  },
  admType: {
    type: String,
    required: true,
  },
  anomaly: {
    type: String,
    required: true,
  },
  currencyCode: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  issueCity: {
    type: String,
    required: true,
  },
  issueDate: {
    type: Date,
    required: true,
  },
  flightNumber: {
    type: String,
    required: true,
  },
  flightDate: {
    type: Date,
    required: true,
  },
  froms: {
    type: String,
    required: true,
  },
  tos: {
    type: String,
    required: true,
  },

  exchangeNumber: {
    type: String,
    required: true,
  },

  exchangedDate: {
    type: Date,
    required: true,
  },
  couponNumberExchange: {
    type: String,
    required: true,
  },

  agentCodeExchange: {
    type: String,
    required: true,
  },

  refundNumber: {
    type: String,
    required: true,
  },

  refundDate: {
    type: Date,
    required: true,
  },
  couponNumberRefund: {
    type: String,
    required: true,
  },

  agentCodeRefund: {
    type: String,
    required: true,
  },
});
/*
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
  // will encrypt password everytime its saved
  userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });*/

// Schema are then compiled into models using the mongoose.model() method
// once you have a model you can use it to find, create, update and delete objects
//module.exports = mongoose.model("users", userSchema);

module.exports = mongoose.model.adms || mongoose.model("adms", admSchema);

//The code above is saying: "create a user table or collection if there is no table with that name already".
