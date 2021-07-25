//IMPORT LIBRARIES
const mongoose = require('mongoose');
const validator = require('validator');

//CREATE A TASK SCHEMA
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: function(value){
            if(value === ""){
                throw new Error("The name of the task cannot be blank");
            }
        }
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

//CALL MIDDLEWARE FUNCTIONS BEFORE CREATING THE MODEL
taskSchema.pre('save', async function(next){
    const task = this;
    console.log("Called pre hook before creating model")
    next();
})

//CREATE A TASK MODEL
const Task = mongoose.model("Task",taskSchema);

module.exports = Task;