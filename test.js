const orm = require("./config/orm");

orm.getAll("burgers", function (data) {
  console.table(data);

  orm.update("burgers", "devoured", true, { 
    where: {
    id: 12,
  }, 
  });
  orm.getAll("burgers", function (taco) {
    console.table(taco);
  });
});
