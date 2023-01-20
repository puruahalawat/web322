/*********************************************************************************
 *  WEB322 – Assignment 1
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 * 
 *  Name: _________Delisha Madhan _____________ Student ID: ______________ Date: __20th January, 2023______________
 *
 *  Cyclic Web App URL: ______________________________________________________
 *
 *  GitHub Repository URL: _____________________________________________________
 *
 ********************************************************************************/





var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Delisha Madhan - 166471219");
});

// setup http server to listen on HTTP_PORTs
app.listen(HTTP_PORT);