// import express
const express = require("express");
// Create the router for the app
const router = express.Router();
//import the burger.js model to use db functions
const burger = require("../models/burger");

router.get("/", function (req, res) {
  burger.getAll(function (data) {
    const hbsObj = {
      burgers: data,
    };
    res.render("index", hbsObj);
  });
});
router.post("/api/burgers", function (req, res) {
  burger.insert(
    "burger_name",
    "devoured",
    req.body.burger_name,
    req.body.devoured,
    function (result) {
      res.json({ id: result.insertId });
      res.status(200).end();
    }
  );
});
router.put("/api/burgers/:id", function (req, res) {
  burger.update("devoured", req.body.devoured, "id", req.params.id, function (
    result
  ) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// export the router at the end of your file.
module.exports = router;
