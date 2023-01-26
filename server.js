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


var express = require('express')
var data = require('./blog-service')
var app = express()
const fs = require('fs');
//require('dotenv').config();
const bodyparser = require('body-parser');
app.use(express.static('public'))
app.use(bodyparser.json());

var PORT = process.env.PORT || 8080

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    //res.send("Delisha Madhan - 166471219");
    res.redirect("/about");
});

app.get("/about", (req, res) => {

    res.sendFile('./views/about.html', { root: __dirname });
});


app.get("/blog", (req, res) => {
    data.getPublishedPosts().then(data => {
            res.send(data);

        })
        .catch(err => {
            res.send("No posts Found !");
        })

});
app.get("/posts", (req, res) => {
    data.getallPosts().then(data => {
            res.send(data);

        })
        .catch(err => {
            res.send("Can not Fetch data");
        })
});
app.get("/categories", (req, res) => {
    data.getCategories().then(data => {
            res.send(data);

        })
        .catch(err => {
            res.send("can not Fetch results !! ");
        })
});

app.use(function(req, res, next) {
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
        res.sendFile('./views/pageNotFound.html', { root: __dirname });
        return;
    }
});



// setup http server to listen on HTTP_PORTs
// initilize the App 
data.initialize().then(() => {
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`)
        })
    })
    .catch(err => {
        console.log("Can not start App");
        console.log(err)
    });