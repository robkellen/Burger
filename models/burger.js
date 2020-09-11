//require orm.js
const orm = require("../config/orm.js"); 
// inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
  getAll: function(cb) {
    orm.getAll("burgers", function(data) {
      cb(data);
      console.table(data);
    });
  },
}

module.exports = burger;