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

//Get/one item
router.get("/:id", async (req, res, next) => {
  try {
    const items = await Item.findByPk(req.params.id);
    //const eachItem = await items.json();
    res.send(items);
  } catch (error) {
    next(error);
  }


});

//Post/item
router.post("/", async (req, res, next) => {
  try {
    const items = await Item.create(req.body);
    // const newItem = await items.json();
    res.send(items);
  } catch (error) {
    next(error);
  }


});

//Delete/item
router.delete("/:id", async (req, res, next) => {
  try {
    const deleteItem = await Item.destroy({
      where:{
        id: req.params.id
      }
    })
    res.send(await Item.findAll());
  } catch (error) {
    next(error);
  }


});

//Update/item
router.put("/:id", async (req, res, next) => {
  try {
    const updateItems = await Item.update(req.body,{
      where:{
        id: req.params.id
      }
    })
    res.send(updateItems);
  } catch (error) {
    next(error);
  }


});



module.exports = router;