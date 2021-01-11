const orm = require("../config/orm");

const burger = {
  all(cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  add(burger, cb) {
    orm.insertOne(burger, function (res) {
      cb(res);
    });
  },
  update(table, column, boolean, condition, cb) {
    orm.updateOne("burgers", table, column, boolean, condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
