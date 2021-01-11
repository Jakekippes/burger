const connection = require("./connection");

const orm = {
  selectAll(table, cb) {
    const queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function (err, data) {
      if (err) throw error;
      cb(data);
    });
  },
  insertOne(val, cb) {
    const queryString = `INSERT INTO burgers (burger_name, devoured) VALUES (?, false)`;
    connection.query(queryString, [val], function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  updateOne(table, column, boolean, condition, cb) {
    connection.query(
      `UPDATE ${table} SET ${column} = ${boolean} WHERE ${condition};`,

      (err, res) => {
        if (err) throw err;
        cb(res);
      }
    );
  },
};

module.exports = orm;
