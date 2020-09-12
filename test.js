const orm = require("./config/orm")
const burger = require("./models/burger");

burger.getAll();
console.table("burgers");

burger.insert("burger_name", "devoured", "spicy", 0);

burger.getAll();
console.table("burgers");
