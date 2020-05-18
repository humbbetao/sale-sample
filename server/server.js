"use strict";

const _ = require("lodash");
const express = require("express");
const Purchase = require("./Purchase");
const { STATUS } = require("./Status");

const app = express();
app.use(express.json());

// Add headers
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

let purchases = [];

app.post("/purchases", (req, res) => {
  if (_.isEmpty(req.body)) {
    res.status(400).json();
  }
  const code = req.body.code;
  const value = req.body.value;
  const date = req.body.date;
  const purchase = new Purchase(code, value, date);
  purchases.push(purchase);
  res.status(201).json({ purchase });
});

app.get("/purchases", (req, res) => {
  // res.send(purchases);
  res.status(200).json({ purchases });
});

app.delete("/purchases/:code", (req, res) => {
  if (_.isEmpty(req.params.code)) {
    res.status(400).json();
  }
  const code = req.params.code;

  if (purchases.every((purchase) => purchase.code !== code)) {
    res.status(404).json();
  }

  purchases = purchases.filter((purchase) => purchase.code !== code);
  res.status(200).json();
});

app.put("/purchases/:code", (req, res) => {
  if (_.isEmpty(req.params.code)) {
    res.status(400).json();
  }
  const code = req.params.code;
  const value = req.body.value;
  const date = req.body.date;

  if (purchases.every((purchase) => purchase.code !== code)) {
    res.status(404).json();
  }

  const purchaseIndex = purchases.findIndex(
    (purchase) => purchase.code === code
  );
  if (purchaseIndex === -1) {
    res.status(404).json();
  }
  purchases[purchaseIndex] = new Purchase(code, value, date);
  res.status(200).json({ purchase: purchases[purchaseIndex] });
});

app.get("/purchases/cashback", (req, res) => {
  const cashback = purchases
    .filter((purchase) => (purchase.status = STATUS[2]))
    .reduce((acc, purchase) => (acc += purchase.cashbackValue), 0);

  res.status(200).json({ cashback });
});

exports.default = app.listen(process.env.HTTP_PORT || 5000);
