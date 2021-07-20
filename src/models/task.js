//IMPORT LIBRARIES
const mongoose = require('mongoose');
const validator = require('validator');

//CREATE A TASK MODEL
const Task = mongoose.model("Task",{
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
})

module.exports = Task;