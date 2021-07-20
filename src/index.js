//IMPORT LIBRARIES
const express = require('express');
const mongoose = require('mongoose');
//Since we only require mongoose to be configured and run, we just require the library since there is nothing that needs to be exported from the file
require("./db/mongoose_config");

//import routes from routers
const userRouter = require("./routers/userRouter");
const taskRouter = require("./routers/taskRouter");

//CONFIGURE APPLICATION
const app = express();
const port = process.env.PORT || 3000

//Parse any incoming json req to object type
app.use(express.json());

//ROUTE HANDLERS
//configure individual routers
app.use(userRouter);
app.use(taskRouter);


//BAD REQUEST HANDLER
app.use((err,req,res,next)=>{
    if(err instanceof URIError){
        return res.status(400).send("Oops! Bad Request")
    }
    next();
})

//MAKING THE APP LISTEN ON A PORT
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})

