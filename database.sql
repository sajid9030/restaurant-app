CREATE DATABASE restaurant_db;
USE restaurant_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(255)
);

CREATE TABLE menu (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10,2)
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  total DECIMAL(10,2),
  status VARCHAR(50)
);

INSERT INTO menu (name, price) VALUES
('Pizza', 250),
('Burger', 120),
('Pasta', 180);
