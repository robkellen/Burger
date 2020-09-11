//require orm.js
const orm = require("../config/orm.js"); 
// inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(data) {
      cb(data);
      console.table(data);
    });
  },
}
//select all from burgers table
// orm.selectAll("burgers");
// node console.table(burger);
module.exports = burger;