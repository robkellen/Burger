// import express
const express = require("express");
// Create the router for the app
const router = express.Router();
//import the burger.js model to use db functions
const burger = require("../models/burger")

router.get("/", function(req, res){
  burger.getAll(function(data){
    const hbsObj = {
      burgers: data,
    }
    res.render("index", hbsObj);
  })
})




// export the router at the end of your file.
module.exports = router;