const mongoose = require("mongoose");

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;

var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
var today = dd + '/' + mm + '/' + yyyy;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{

    },
    locate :{

    },
    gender: {
       
    },
    id: {
       
    },
    status: {
       
    },
    accepted_date:{
        type:String,
        default:today
    },
    gettime:{
        
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
        type: String
    }
})

//we need a collection

const Accepted = mongoose.model('Accepted', userSchema);
module.exports = Accepted;