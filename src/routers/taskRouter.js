const express = require("express");
const mongoose = require("mongoose");

const Task = require("../models/task");

const router = new express.Router();

//TASK ROUTES

//Create a new task
router.post("/tasks",async (req,res)=>{
    const task = new Task(req.body);

    try{
        await task.save();
        res.status(201).send("Task has been created!")
    }catch(err){
        res.status(400).send(`Error! : ${err}`);
    }

})

//Fetch all tasks
router.get("/tasks",async (req,res)=>{

    const tasks = await Task.find({});

    try{
        if(tasks.length === 0){
            res.send('There are currently no tasks to be displayed!')
        }
        res.send(tasks);
    }catch(err){
        res.status(500).send(`Unable to fetch tasks. Error: ${err}`)
    }
    
})

//Fetch a single task by id
router.get("/tasks/:id",async (req,res)=>{
    const _id = req.params.id;

    try{
        if(mongoose.isValidObjectId(_id)){
            const task = await Task.findById(_id)
            try{
                if(!task){
                    return res.status(404).send(`Task with id: ${_id} not found!`)
                }
                res.send(task)
            }catch(err){
                res.status(500).send(`Error! ${err}`)
            }            
        }else{
            res.status(404).send(`Oops! Invalid id!`)
        }
    }catch(err){
        res.status(500).send(`Error! ${err}`)
    }

})

//Update a single task
router.patch("/tasks/:id",async (req,res)=>{
    const _id = req.params.id;
    const updates = Object.keys(req.body);
    const allowedFields = ["name","description","completed"];
    const areValidUpdates = updates.every((update)=>{
        return allowedFields.includes(update);
    })

    if(!areValidUpdates){
        return res.status(400).send("Error! Invalid updates!")
    }

    if(mongoose.isValidObjectId(_id)){
        try{
            //const task = await Task.findByIdAndUpdate(_id,req.body,{new: true, runValidators: true});

            const task = await Task.findById(_id);
            updates.forEach(updateProp=> task[updateProp] = req.body[updateProp]);
            await task.save();

            if(!task){
                return res.status(404).send(`Task with id: ${_id} not found`);
            }
            res.send(task)
        }catch(err){
            res.status(500).send(`Error: ${err}`);
        }
    }else{
        res.status(404).send("Oops! Invalid id")
    }

})

//Delete Task
router.delete("/tasks/:id",async (req,res)=>{
    const _id = req.params.id;

    if(mongoose.isValidObjectId(_id)){
        try{
            const task = await Task.findByIdAndDelete(_id);
            if(!task){
                return res.status(404).send(`Task with id: ${_id} not found`);
            }
            res.send(task);
        }catch(err){
            res.status(400).send(`Error! ${err}`);
        }
    }else{
        res.status(404).send("Oops! Invalid id!");
    }
})

module.exports = router;