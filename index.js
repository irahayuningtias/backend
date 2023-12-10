const express = require("express")
const cors = require('cors');
const path = require('path');
const connection = require('./app/model/index')
//init express server and router
const app = express();
const mainRouter = require('.app/routes');
require('dotenv').config()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//http router
app.use("/", mainRouter);

const port = 3000
app.listen(port, function(){
    console.log(`Server is running on port ${port}`)
    connection.authenticate()
    .then(function(){
        console.log('Connection has been established successfully.')
    })
    .catch(function(err){
        console.log('Unable to connect to the database:', err)
        process.exit()
    })
})