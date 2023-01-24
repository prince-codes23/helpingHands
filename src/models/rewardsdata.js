const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email:{

    },
    rewards:{
        type:Number,
        default:0
    }
})

//we need a collection

const rewardsdata = mongoose.model('rewardsdata', userSchema);
module.exports = rewardsdata;