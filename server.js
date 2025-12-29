const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const authRoutes = require("./routes/auth");
const menuRoutes = require("./routes/menu");
const orderRoutes = require("./routes/orders");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: "restaurant_secret",
  resave: false,
  saveUninitialized: false
}));

app.use("/", authRoutes);
app.use("/menu", menuRoutes);
app.use("/orders", orderRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
const adminRoutes = require("./routes/admin");
app.use("/", adminRoutes);
