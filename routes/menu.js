const express = require("express");
const db = require("../config/db");

const router = express.Router();

router.get("/", (req, res) => {
  if (!req.session.cart) req.session.cart = [];

  db.query("SELECT * FROM menu", (err, items) => {
    res.render("menu", { items, cart: req.session.cart });
  });
});

router.post("/add", (req, res) => {
  const { id, name, price } = req.body;

  if (!req.session.cart) req.session.cart = [];

  req.session.cart.push({ id, name, price });
  res.redirect("/menu");
});

module.exports = router;
