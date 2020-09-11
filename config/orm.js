//import connection from connection.js
const connection = require("../config/connection");

//create methods to execute MySQL commands in controllers
const orm = {
  //method to select all burgers from burgers table
  selectAll: function (table, cb) {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function (err, data) {
      if (err) {
        // res.status(500).end();
        console.log("Nope");
      }
      cb(data);
    });
  },
  //method to insert a burger into the db
  insertOne: function (table, column, value, cb) {
    const queryString = "INSERT INTO ?? (??) VALUES (?)";
    console.log(queryString);
    connection.query(queryString, [table, column, value], function (err, res){
      if (err){
        res.status(500).end();
      }
      cb(data);
    })
  },
  //method to update a burger in the db
  // updateOne: function () {},
};

module.exports = orm;
