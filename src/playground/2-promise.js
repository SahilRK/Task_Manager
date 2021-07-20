require("../db/mongoose_config")
const Task = require('../models/task')

/* Task.findOneAndDelete({_id: '60db5f3508e26782b9563212'}).then((task)=>{
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((count)=>{
    console.log(count);
}).catch((error)=>{
    console.log(error)
}) */

const deleteTaskAndCount = async (id,completed) =>{
    const task = await Task.findOneAndDelete({_id: id});
    const count = await Task.countDocuments({completed});
    return {
        task,
        count
    }
}

deleteTaskAndCount('60e45dfb978f0fbb0af86f98',false).then((result)=>{
    console.log(result.task);
    console.log(result.count);
}).catch((error)=>{
    console.log(error);
})