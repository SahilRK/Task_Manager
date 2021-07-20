const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user");

const router = new express.Router();
//USER ROUTES
//Create a new user
router.post("/users", async (req,res)=>{
    const user = new User(req.body)

    try{
        await user.save();
        res.status(201).send(user);
    }catch(err){
        res.status(400).send(err);
    }

})

//Fetch all users
router.get("/users",async (req,res)=>{
    const users = await User.find({});
    try{        
        res.send(users);
    }catch(err){
        res.status(500).send(err)
    }
})

//WORKING ON ROUTES WITH ROUTE PARAMETERS.
//Route Parameters are part of the URL used to capture dynamic values passed to the route. We can access it pass it using eg: :id post the base url and access it using req.params

//Fetch single user
router.get("/users/:id",async (req,res)=>{
    const _id =  req.params.id;
    
    try{
        if(mongoose.isValidObjectId(_id)){
            const user = await User.findById(_id);
            if(!user){
                return res.status(404).send(`User with id: ${_id} not found`);
            }

            res.send(user)
        }else{
            res.status(404).send(`Oops! Invalid id!`);
        }
    }catch(err){
        res.status(500).send(`Error: ${err}`)
    }

})

//Update User details
router.patch("/users/:id",async (req,res)=>{
    const updates = Object.keys(req.body);
    const allowedFields = ["age","name","email","password"]
    const areValidUpdates = updates.every((update)=>{
        return allowedFields.includes(update)
    })

    if(!areValidUpdates){
        return res.status(400).send(`Error! Invalid updates!`)
    }

    const _id = req.params.id;

    try{
        if(mongoose.isValidObjectId(_id)){
            //const user = await User.findByIdAndUpdate(_id,req.body,{new: true, runValidators: true});

            const user = await User.findById(_id);
            updates.forEach(updateProp=> user[updateProp]=req.body[updateProp])
            await user.save();

            if(!user){
                return res.status(404).send(`User with id: ${_id} not found`)
            }
            res.send(user)   
        }else{
            res.status(404).send("Oops! Invalid id!")
        }
    }catch(err){
        res.status(400).send(err)
    }

})

//Delete User
router.delete("/users/:id",async (req,res)=>{
    const _id = req.params.id;

    if(mongoose.isValidObjectId(_id)){
        try{
            const user = await User.findByIdAndDelete(_id);
            if(!user){
                return res.status(404).send(`User with id: ${_id} not found`)
            }
            res.send(user)
        }catch(err){
            res.status(400).send(`Error! ${err}`)
        }
    }else{
        res.status(404).send("Oops! Invalid id!");
    }
})

//Export the router
module.exports = router