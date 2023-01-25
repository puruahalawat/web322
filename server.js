/*********************************************************************************
 *  WEB322 – Assignment 1
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 * 
 *  Name:  Delisha Madhan __ Student ID:  166471219___ Date: 20th January, 2023
 *
 *  Cyclic Web App URL: https://sapphire-bighorn-sheep-tie.cyclic.app/ 
 *
 *  GitHub Repository URL:   https://github.com/delishamadhan/web322-dmadhan 
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