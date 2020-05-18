"use strict";

const _ = require("lodash");
const express = require("express");
const Purchase = require("./Purchase");

const app = express();
app.use(express.json());

let purchases = [];

app.post("/purchase", (req, res) => {
  if (_.isEmpty(req.body)) {
    res.status(400).json();
  }
  const code = req.body.code;
  const value = req.body.value;
  const date = req.body.date;

  purchases.push(new Purchase(code, value, date));
  res.status(201).json();
});

app.get("/purchase", (req, res) => {
  // res.send(purchases);
  res.status(200).json({ purchases });
});

app.delete("/purchase", (req, res) => {
  if (_.isEmpty(req.body)) {
    res.status(400).json();
  }
  const code = req.body.code;

  if (purchases.every((purchase) => purchase.code !== code)) {
    res.status(404).json();
  }

  purchases = purchases.filter((purchase) => purchase.code !== code);
  res.status(200).json();
});

app.put("/purchase", (req, res) => {
  if (_.isEmpty(req.body)) {
    res.status(400).json();
  }
  const code = req.body.code;
  const value = req.body.value;
  const date = req.body.date;

  if (purchases.every((purchase) => purchase.code !== code)) {
    res.status(404).json();
  }

  purchases = purchases.filter((purchase) => purchase.code !== code);
  res.status(200).json();

  const purchaseIndex = purchases.findIndex(
    (purchase) => purchase.code === code
  );
  if (purchaseIndex === -1) {
    res.status(404).json();
  }
  purchases[purchaseIndex] = new Purchase(code, value, date);
});

exports.default = app.listen(process.env.HTTP_PORT || 5000);
