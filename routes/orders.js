const express = require("express");
const db = require("../config/db");

const router = express.Router();

router.post("/place", (req, res) => {
  const userId = req.session.user.id;
  const total = req.body.total;

  db.query(
    "INSERT INTO orders (user_id, total, status) VALUES (?, ?, ?)",
    [userId, total, "Pending"],
    () => res.send("Order placed successfully")
  );
});

module.exports = router;
