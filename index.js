require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dayjs = require("dayjs");
dayjs().format();


const app = express();
app.use(morgan("dev"));
app.use(express.json());


app.get("/shoppinglists", (req, res) => {
  ShoppingLists.find().then((results) => res.status(200).json(results));
});

app.post("/shoppinglists", (req, res) => {
  const newList = new ShoppingLists(req.body);
  newList.save();
  res.status(201).json(newList);
});


app.listen(port, () => console.log(`Application is running on port ${port}`));