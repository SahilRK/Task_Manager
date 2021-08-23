NODEJS:
1) Asynchronous
2) Non Blocking: Non-blocking I/O means that the user can interact with the browser even when there is an I/O process happening in the background. 
3) Single Threaded: Javscript is single threaded, which means that it can only execute one request at a time.
4) Event Driven


TO INSTALL OR UPDATE THE VERSION OF NODE
1) Check if node is installed using
node -v

2) If node is installed then check if the "n" package is installed.
npm list -g n

3) Install n package using npm if you do not have it installed yet. -- Only if you havent installed "n" package manager
$ sudo npm install -g n

4) Then, you can update your Node.js to the version you want.
(Use this command to install the stable node release.)
$ sudo n stable
(Use this command to install/update the latest node release.)
$ sudo n latest
(Use this command to install/update the latest LTS node release.)
$ sudo n lts


TO TEST AND RUN AND NODE BASED PROGRAMS, WE CAN USE THE REPL INTERACTIVE TERMINAL SHELL BY DOING THE BELOW
1) Open a terminal and type "node". It looks like this.
Welcome to Node.js v16.2.0(whichever is your version, that will show up. mine is 16.2.0)
Type ".help" for more information.
> 

TO INITIALISE AND INSTALL THE NPM PROJECT 
1) npm init: This command initialises the project.json file if the file does not exist. If it exists then it installs the packages from the project.json file.
Alternate: npm init -y: The -y option answers all the questions by default while creating a project.json file.

KEY DIFFERENCES B/W JSON and Javascript
1) JSON - The key and value in a file has to be within double quotes and not single quotes. Eg: {"name":"Sahil"}. Javascript - The key need not be compulsarily in double quotes and the value can be in single quotes.

ARROW FUNCTIONS
NOTE: Arrow functions do not have bindings to their own "this" this value and borrow the value from the context in which they are created.
Therefore never use arrow functions as values of properties in objects. But they are useful when they are used inside of a function since their execution context becomes the function inside which they are declared.

DEBUGGER:
NODE debugger is an inbuilt node debugging tool which can be used to debug code in the V8 engine or the chrome browser. We do this by adding the "debugger" code in the place where we want to debug code. To run the debugger, we use the command "node inspect app.js( followed by whatever command we want to run )".
Steps to debug the code:
1) Add "debugger" before the line of code that has to be debugged
2) Run "node inspect app.js( followed by whatever command we want to run )" in the CLI.
3) Open the chrome browser and type "chrome://inspect" in the URL.
4) Click on inspect under any of the targets.
5) We will use the console and sources tab to debug the application.
6) To rerun the application debugger again, enter the "restart" command after "debug>" and it restarts the debugger.
7) To close the debugger, enter "Ctrl+C" twice.

BASICS OF NODEJS SYSTEM
//1) The window equivalent object of the browser in node is called "global"
//2) window is the global object of the browser and document is the main DOM object. These are available only in the browser.
//3) Similarly, global and process objects are the respective equivalents of window and document. global contains all the properties and methods that are available on the global object. The process object contains various properties and methods for the node process that is running.
//4) NodeJS uses an event-driven,non-blocking I/O that makes it lightweight and efficient. Non-blocking I/O means that the user can interact with the browser even when there is an I/O process happening in the background.
//5) To run a simple node script, open the terminal and type node <the js file name>
console.log(`Hey welcome to nodejs`);

NODE MODULE SYSTEM
This allows us to load modules into our app and perform interesting tasks. They allow us to load and access code from three places.
//1) Core Node modules
//2) Third party node modules
//3) Self/User created modules.
//4) Some modules are globally available such as console which we dont need to import. Whereas there are other modules that need to be imported inorder to use their functionality
//5) To load in any module, we use the require function. The value returned from the require has to be stored in a variable to be used. const <varname> = require('<module name>')
//6) When a module is loaded with require, and we try to access a variable from the other module or file, we cannot access it since the scope of the variables is limited only to their file. To counter this, we use a concept of node called module.exports. This defines what can be shared with other files. Whatever is assigned to module.exports, gets exported for other files to use.
const name = "Sahil";
module.exports = name

//So in the file that requires this file, the name variable is returned back which can then we stored in a variable and accessed.

NPM
Inorder to use the to use all the packages from npm, we have to create a file to manage all the dependencies. We run the "npm init" command in the command line which creates a package.json file. 

//1) Either add the node modules folder to .gitignore so that the node modules does not get pushed to git. Or delete the node modules while sharing it with others. This will ensure that the size of the package is reduced. The user can always run npm init to recreate the node modules folder which will create it from the packages mentioned in the package.json.

//2) Installing packages globally: We install npm packages globally which dont need to be required into into the project. They give us commands that we can access directly from the terminal. We install packages globally as follows "npm install <package name>@<version> -g".

NODEMON: 
This package is installed globally using -g on npm install. nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. 
  
NODE CL ARGUMENTS:
The command line arguments in node is used to pass data to the file that node runs. It passes data to the process object in the following way - "node app.js Sahil". This data is stored in process.argv property(Argument vector) in the form of an array as follows
[
    '/usr/local/bin/node',
    '/Users/HURRICANE/JavaScript/Learning-NodeJS/Notes-App/app.js',
    'Sahil'
]
 
Index1 is the path of the node executable 
Index2 is the file running the process
Index3 onwards the arguments passed can be accessed. Eg Sahil

IMPORTANT JSON METHODS AND USES:
    1) JSON.stringify(<js object>) - The stringify method is used to convert a normal JS object to a JSON object(String based object since in JSON all the key and properties have to be strings)
    const bookJSON = JSON.stringify(book);
    2) JSON.parse(<json object>) - The parse method is used to convert a JSON object to a normal JS object.
    const bookJS = JSON.parse(bookJSON);

FS METHODS 
These can be combined to write and read to and from JSON file.
    1) fs.writeFileSync('file name','data to be written) - Data can be written to a file using this method. It creates the file if the file cannot be found.
    fs.writeFileSync('1-json.json',bookJSON);
    2)fs.readFileSync('<file name to be read>') - The file is read as buffer data which is NODEJS's way of representing binary data.
    const dataBuffer = fs.readFileSync('1-json.json');
    To convert this into JSON, we use the toString method.
    const bufferToJSON = dataBuffer.toString();

ASYNCHRONOUS NODEJS:
This technique provided by NODEJS helps in executing code without waiting for another piece of code to finish execution.
One of the few basic functions provided by NODEJS:
1) setTimeout(function(){},timeToWait in milliseconds): This function waits to execute the function in the first parameter for eg: 2000MS(2 seconds) which is defined in the second parameter.

SETTIMEOUT:
setTimeOut is not a part of Javascript. V8 also has no implementation for it. NODEJS creates the implementation from C++ and provides it to use. It registers an event with NodeJS API.

CALL STACK, CALLBACK QUEUE AND EVENT LOOP:
1) Call Stack
//Is a simple DS provided by the V8 JS engine. The job of the call stack is to keep a track of the execution of the program by keeping track of all the functions that are being executed currently.
//It works on the concept of FILO( First In Last Out).
//When a program is executed by Node, it gets wrapper in a main() function by node in the background. This method is pushed to the call stack first. This is followed by all other functions that are called and they keep getting added on top of each other. So once they have finished getting executed, they are removed from the call stack.
//Only functions are pushed to the call stack.

//2) Node API's
//It provides support to JS by providing API functions on top of Javascript. It takes the asynchronous functions called in the program and calls the functions through the API and gets the result.
 
3) Callback Queue:
Its job is to maintain a list of all the call back events that are waiting to get executed. The callback function to be executed get added on to the callback Queue

4) Event Loop:
The event loop checks the call stack if it is empty, so that it can run the callback functions from the callback queue. Once the call stack is empty, the event loop takes the function in the callback queue and ads it to the call stack and executes it.

NOTE: None of the aysnchronous functions run before the main() function is complete.

API:
Application programming Interface is a technique of communicating with different applications over the world, to send and receive data to be used in the application. It also helps different types of applications and devices to consume the API to perform their tasks rather than writing the same code on their platforms.
API has the following properties.
1) API key: This is an access key to safely communicate between two devices by authenticating the communication via the key.
2) API Endpoints: These are the different URL's that the application provides to commuicate the data between two apps.
3) Base URL: This is the URL that is common among all endpoints.
Eg: http://api.weatherstack.com
4) Query String: This is a part of the URL that assigns a value to a parameter. It basically adds the fields and values that have to be passed to the Base URL.
Eg: http://api.weatherstack.com?location=bengaluru&pincode=560024
location=bengaluru&pincode=560024 - This is the query string
5) Response: This is one of the main objects returned back from an HTTP request with all the values that the server responded with.
On calling "response.body" we can access all the properties and values related to the response.


Logins:
Weatherstack: sahil.rordev@gmail.com
Mapbox: sahilrk

encodeURIComponent:
encodeURIComponent(variable name) is used to convert the Special characters in the string to the encoded version which helps in including the special character and also helps in avoiding page crashes due to special characters in the URL.

EXPRESS:
It is the most popular web server for NodeJS which is used to serve data to users in the form of Web Applications or API's.
We import express by require('express'). Since express returns a function, we have to call the function to create a web server.

To run express using nodemon, we run the app file from the src folder and use the -e(extensions) option to tell express to look for changes in the value passed to -e, which is the type of file for which express should look for changes and restart the server.
nodemon src/app.js -e js,hbs

METHODS ON EXPRESS MODULE.
1) app.get(): To serve up a request on a particular route, we use the app.get method. It creates a handler. It accepts two arguments. It accepts two arguments.
app.get('<route path eg: </help>', (req,res)=> {
    The req, res are the request, response values that we receive to perform a required task.
    //req is the request we receive when a particular url is accessed.
    //res is what we want to send back to the user/ or what the user wants to see

    //METHODS ON RES
    1) res.send('html or array or object'); is used to send a response back to the user

    2) res.render() is used to render a view which in our case is a handlebar template.
    res.render('index',{

    }) 
    -- First parameter is the name of the view without the extension
    -- Second parameter is an object with the properties and values that we want to pass to the view to be used in the dynamic template.


    //METHODS ON REQ
    1) req.query: The query property returns back an object containing key-value parameters passed from the query string by the user. Eg: {search: "games", rating: "5"}
})

2) app.listen(port, callback):  is used to start the server. The callback is optional and is used to perform a task once the server is up and running.
app.listen(3000, ()=>{
    console.log("Server is running at port 3000");
})

3) app.use():  
//app.use() is used to customise the server. To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express. The root of the site always serves to index.html by default.
app.use(express.static(publicDirectoryPath));

4) app.set():

//To set allows you to add a value for an app setting in express. The first parameter is a key and second is a value. In this case we set up a view engine with the module handlebars(hbs).
//NOTE: Handlebars expects all the views to live in a separate folder called views.
app.set('view engine','hbs');


Directory structure to maintain for a node express app:
/public : This folder serves all the public files such as html, css, images, documents
//src: This folder serves all the core js files of the application

DYNAMIC PAGES using TEMPLATING ENGINES(HANDLEBAR):
A template engine can be used to render dynamic web pages. This helps us create templates and reuse the code across the project.
We use the hbs library to integrate handlebars in node. hbs expects the files to be in a specific "views" folder.

ES6 Default Function Parameter Values:
A default function parameter value ensures that we dont encounter an undesirable output such as a sudden error which is uncaught. The function parameter is assigned a default value and if the value is passed while calling the function then the default value is ignored. Eg
function personDetails(name="Sahil",age=29){
    console.log(`${name} -- ${age}`)
}

HEROKU:
Heroku is a cloud application hosting platform that allows a user to host their applications on a public cloud to be accessed on the internet

To Host an app, we first link the heroku account via cli to our heroku accounts using the cli tools
1) heroku login: Allows us to login to our heroku account via the terminal
2) heroku keys:add: Allows us to add our ssh key to heroku to deploy our code
3) heroku create: Creates a heroku application. Make sure that this task is performed from our application directory. Eg: Web-Servers directory in this case which holds the weather app.
4) To run an application in heroku, we configure our package.json "scripts" property to tell heroku which script to run. We can use this config locally as well. To run a script, we run the following. Add the start script in package.json by doing the following
"scripts":{
    "start": "node src/app.js"    
}
npm run <script name under scripts. eg start>


MONGODB
Mongodb is a NOSQL based object db which is made up of collections.
Steps to install and startup a mongodb instance:
1) Install the community server version of mongodb
    a) brew tap mongodb/brew - This command downloads mongod which is a third party app(tap).
    b) brew install mongodb-community - This command installs mongodb
2) Create a mongodb-data folder to store the data from the db
3) Start it by using the following command
mongod --dbpath=/Users/<username>/mongodb-data
4) Create a new connection string
5) NOTE: Since mongodb uses a connection pool, it always looks like it has opened multiple connections when one observes it in the terminal.

COMMANDS:
1) Check version of the db
db.version();
2) Start it by using the following command
mongod --dbpath=/Users/<username>/mongodb-data

STEPS TO CREATE AND INITIALISE A CONNECTION:
1) We require mongodb
require("mongodb");
2) We store the mongoclient to perform connections and other operations on the db
const MongoClient = mongodb.MongoClient
3) We create a connection URL. 27017 is the default port for mongodb.
const connectionUrl = "mongodb://127.0.0.1:27017
4) We create a db name that we want to connect to
const dbName = "task-manager"
5) We establish a connection by calling the connect method on the MongoClient function constructor and passing the url,options and the callback function.
The callbackfunction returns a client object which stores all the methods to perform operations on the db.
MongoClient.connect(connectionURL,{useNewUrlParser: true,useUnifiedTopology: true},(error,client)=>{
    if(error){
        return console.log("Unable to connect to database");
    }
    
    console.log("connection successful!");
    const db = client.db(dbName)
})

#NOTE: In mongodb the _id column that is created is a GUID(Globally unique identifiers) in which the algorithm in mongo decides what the next value will be. It is stored as a binary rather than a string because it cuts down the size of storing data
