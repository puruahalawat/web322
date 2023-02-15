/*********************************************************************************
 *  WEB322 – Assignment 3
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 * 
 *  Name:  Delisha Madhan __ Student ID:  166471219___ Date: 15th February, 2023
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
const multer = require("multer");
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');
const bodyparser = require('body-parser');
app.use(express.static('public'))
app.use(bodyparser.json());


var PORT = process.env.PORT || 8080




cloudinary.config({
    cloud_name: 'dflilinky',
    api_key: '728615774425672',
    api_secret: 'oZ9jOS81mEfxoYGHK8GlLezC2Iw',
    secure: true
});


const upload = multer();



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


app.get('/posts', (req, res) => {
    let queryPromise = null;

    // by category query 
    if (req.query.category) {
        queryPromise = data.getPostsByCategory(req.query.category);
        // by mindate Query 
    } else if (req.query.minDate) {
        queryPromise = data.getPostsByMinDate(req.query.minDate);
        //all posts 
    } else {
        queryPromise = data.getallPosts()
    }

    queryPromise.then(data => {
        res.send(data)
    }).catch(err => {
        res.render("No Posts Found");
    })
});

app.get("/posts/add", (req, res) => {
    res.sendFile('./views/addPost.html', { root: __dirname });
});

// post/value route 
app.get('/posts/:id', (req, res) => {
    data.getPostById(req.params.id).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send("No Result Found");
    })
});

app.post('/posts/add', upload.single('featureImage'), (req, res) => {
    let streamUpload = (req) => {
        return new Promise((resolve, reject) => {
            let stream = cloudinary.uploader.upload_stream(
                (error, result) => {
                    if (result) {
                        resolve(result);
                    } else {
                        reject(error);
                    }
                }
            );
            streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
    };

    async function upload(req) {
        let result = await streamUpload(req);
        console.log(result);
        return result;
    }
    upload(req).then((uploaded) => {
        req.body.featureImage = uploaded.url;
        var postData = req.body;
        data.addPost(postData).then(data => {
            res.redirect('/posts');
        }).catch(err => {
            res.send(err);
        });

    });

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