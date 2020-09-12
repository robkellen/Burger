//import connection from connection.js
const connection = require("../config/connection");
const express = require("express");

//create methods to execute MySQL commands in controllers
const orm = {
  //method to select all burgers from burgers table
  getAll: function (table, cb) {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function (err, data) {
      if (err) console.log(err);
      cb(data);
    });
  },
  //method to insert a burger into the db
  insert: function (
    table,
    columnName,
    columnUnique,
    valueName,
    valueUnique,
    cb
  ) {
    const queryString = "INSERT INTO ?? (??,??) VALUES (?,?)";
    connection.query(
      queryString,
      [table, columnName, columnUnique, valueName, valueUnique],
      function (err, data) {
        if (err) console.log(err);
        cb(data);
      }
    );
  },
  //method to update a burger in the db
  update: function (table, columnUnique, valueUnique, idColumn, idValue, cb) {
    const queryString = "UPDATE ?? SET ??=? WHERE ??=?";
    console.log(queryString);
    connection.query(
      queryString,
      [table, columnUnique, valueUnique, idColumn, idValue],
      function (err, result) {
        if (err) console.log(err);
        console.log(data);
        cb(result);
      }
    );
  },
};

module.exports = orm;
