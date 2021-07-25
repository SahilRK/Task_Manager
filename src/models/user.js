//IMPORT LIBRARIES
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

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
        unique: true,
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

//DEFINE CUSTOM STATIC USER DEFINED METHOD ON THE SCHEMA
userSchema.statics.findByCredentials = async (email,password) => {
    const user = await User.findOne({email});
    if(!user){
        throw new Error("Unable to login1");
    }
    const isMatch = await bcrypt.compare(password,user.password);
    console.log(isMatch);
    if(!isMatch){
        throw new Error("Unable to login2");
    }
    console.log("Login successful")
    return user;
}

//CALL MIDDLEWARE FUNCTIONS BEFORE CREATING THE MODEL
userSchema.pre('save', async function(next){
    const user = this;
    
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8);
    }

    next();
});

//CREATE A USER MODEL
const User = mongoose.model("User",userSchema);

module.exports = User;