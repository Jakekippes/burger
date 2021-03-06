const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    res.render("index", { burgers: data });
  });
});

router.post("/api/burgers", function (req, res) {
  burger.add(req.body.burger_name, function (result) {
    res.json({ id: result.id });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  const condition = { id: req.params.id };
  burger.update(
    { devoured: req.body.devoured === "true" },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

module.exports = router;
