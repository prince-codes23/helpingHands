const mongoose = require("mongoose");
const validator = require('validator');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
      
    },
    gettime:{
       
    },
    locate :{

    },
    gender: {
       
    },
    id: {
       
    },
    status: {
       
    },
    number: {
        type: Number,
        required: true,
        min: 10
    },
    helptext: {
        type: String,
        required: true,
        minLength: 5
    },
    acceptedby: {
        type: String,
        default:"email"
    }
})

//we need a collection

const User = mongoose.model('User', userSchema);
module.exports = User;