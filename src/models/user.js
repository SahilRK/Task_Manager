//IMPORT LIBRARIES
const mongoose = require('mongoose');
const validator = require('validator');

//CREATE A USER SCHEMA
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        validate: function(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid");
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate: function(value){
            if(value.length < 6){
                throw new Error("Password should contain a min of 6 characters")
            }else if(value.includes("password")){
                throw new Error("Password cannot contain the word password")
            }
        }
    }
})

//CALL MIDDLEWARE FUNCTIONS BEFORE CREATING THE MODEL
userSchema.pre('save', async function(next){
    const user = this;
    console.log("Just before saving");


    /* const bcrypt = require("bcrypt");

const encryptPassword = async function(password){
    const encryptedPassword = await bcrypt.hash(password,8);

    console.log(encryptedPassword)
    const match = await bcrypt.compare("Sahil9102",encryptedPassword);
    console.log(match)
}

encryptPassword("Sahil9102") */

    next();
});

//CREATE A USER MODEL
const User = mongoose.model("User",userSchema);

module.exports = User;