//This imports the mongoose library
const mongoose = require('mongoose');

//To connect to mongoose, we pass in the following
//1 Arg: The connection string "mongodb://<ip>:<port>/dbname"
//2 Arg: The options parameter
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


