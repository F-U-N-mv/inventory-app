const express = require("express");
const router = express.Router();
const {Item} = require('../models/Item')

// GET /items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    // const data = await items.json();
    res.send(items);
  } catch (error) {
    next(error);
  }


});

//Get/ one item
router.get("/:id", async (req, res, next) => {
  try {
    const items = await Item.findByPk(req.params.id);
    const eachItem = await items.json();
    res.send(eachItem);
  } catch (error) {
    next(error);
  }


});


module.exports = router;