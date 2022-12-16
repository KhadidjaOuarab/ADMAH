// create users schema using mongoose
// import mongoose
const mongoose = require('mongoose')
// Define schema
// Schema allows you to define the fields stored in each document
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }


});
// Schema are then compiled into models using the mongoose.model() method
// once you have a model you can use it to find, create, update and delete objects
module.exports = mongoose.model("users", userSchema);