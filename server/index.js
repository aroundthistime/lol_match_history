const { default: axios } = require('axios');
const path = require("path");
require('dotenv').config()
var express = require('express');
const { fetchByUsername } = require('./controllers');

const app = express();

app.use("/static", express.static(path.join(__dirname, "static")));

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.listen(process.env.PORT, () => console.log("Server running"));

// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // // Request methods you wish to allow
//     // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // // Request headers you wish to allow
//     // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // // Set to true if you need the website to include cookies in the requests sent
//     // // to the API (e.g. in case you use sessions)
//     // res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

app.get('/summoner/:username', fetchByUsername)