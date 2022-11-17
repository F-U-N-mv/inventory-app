const express = require("express");
const router = express.Router();
const { Sauce } = require("../models/index");

// GET /sauce
router.get("/", async (req, res, next) => {
  try {
    const sauces = await Sauce.findAll();
    res.send(sauces);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
