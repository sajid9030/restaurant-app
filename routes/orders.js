const express = require("express");
const db = require("../config/db");

const router = express.Router();

router.post("/place", (req, res) => {
  if (!req.session.user || !req.session.cart) {
    return res.redirect("/");
  }

  const userId = req.session.user.id;
  const total = req.body.total;

  db.query(
    "INSERT INTO orders (user_id, total, status) VALUES (?, ?, ?)",
    [userId, total, "Placed"],
    () => {
      req.session.cart = [];
      res.send("✅ Order placed successfully");
    }
  );
});

module.exports = router;
