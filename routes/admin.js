const express = require("express");
const db = require("../config/db");

const router = express.Router();

router.get("/admin", (req, res) => {
  db.query(
    `SELECT orders.id, users.name, orders.total, orders.status 
     FROM orders 
     JOIN users ON orders.user_id = users.id`,
    (err, orders) => {
      res.render("admin", { orders });
    }
  );
});

module.exports = router;
