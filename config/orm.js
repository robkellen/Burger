//import connection from connection.js
const connection = require("./connection");

//create methods to execute MySQL commands in controllers
const orm = {
  //method to select all burgers from burgers table
  selectAll: function (table) {
    const queryString = "SELECT * FROM ?";
    connection.query(queryString, [table], function (err, res) {
      if (err) {
        res.status(500).end();
      }
      console.log(res);
    });
  },
  //method to insert a burger into the db
  insertOne: function () {},
  //method to update a burger in the db
  updateOne: function () {},
};

module.exports = orm;
