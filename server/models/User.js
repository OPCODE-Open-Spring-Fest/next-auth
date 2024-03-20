const mongoose = require('mongoose');
const {isEmail} = require('validator');

const userSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: [true,"Please enter a valid Name"]
    },
    email:{
        type: 'string',
        required: [true,"Please enter a valid Email"],
        unique: true,
        lowercase: true,
        validate:[isEmail,"Please Enter a valid Email"]

    },
    password:{
        type: 'string',
        required: [true,"Please enter Password"],
        minLenght:[8,"Minimum length is 8"]
    }
    
});

const User = mongoose.model("User",userSchema);
module.exports = User;