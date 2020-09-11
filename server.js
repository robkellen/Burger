const express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");






// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));