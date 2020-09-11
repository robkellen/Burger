const orm = require("./config/orm");

orm.selectAll("burgers", function (data) {
  console.table(data);

  orm.insertOne("burgers", "burger_name", "Royale with Cheese", function (data){
    console.log(data);
  })
  
});
