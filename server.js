require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
var port = process.env.PORT || 3001;

const app = express();

app.use(cors());
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, content-type, X-Auth-Token');
    return next();
});
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Einstein application." });
});

require("./app/routes/user.routes.js")(app);

// set port, listen for requests
app.listen(port, () => {
    console.log("Server is running on port 3001.");
});

