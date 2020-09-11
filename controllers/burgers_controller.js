const express = require("express");
// Create the router for the app
const router = express.router();
//import the burger.js model to use db functions
const burger = require("../models/burger")






// export the router at the end of your file.
module.exports = router;