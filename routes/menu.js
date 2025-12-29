const express = require("express");
const db = require("../config/db");

const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM menu", (err, items) => {
    res.render("menu", { items });
  });
});

module.exports = router;
