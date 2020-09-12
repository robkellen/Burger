//import orm.js
const orm = require("../config/orm.js");
// inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
  getAll: function (cb) {
    orm.getAll("burgers", function (data) {
      cb(data);
    });
  },
  insert: function (columnName, columnUnique, valueName, valueUnique, cb) {
    orm.insert(
      "burgers",
      columnName,
      columnUnique,
      valueName,
      valueUnique,
      function (data) {
        cb(data);
      }
    );
  },
  update: function (columnUnique, valueUnique, idColumn, idValue, cb) {
    orm.update(
      "burgers",
      columnUnique,
      valueUnique,
      idColumn,
      idValue,
      function (data) {
        cb(data);
      }
    );
  },
};

module.exports = burger;
