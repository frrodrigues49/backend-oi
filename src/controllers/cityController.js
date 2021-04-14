const express = require("express");
const { getAll } = require("../repositories/cityRepository");
const City = require("../models/City");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

// router.use(authMiddleware);

//index
router.get("/:uf", async (req, res) => {
  await getAll(City, req, res);
});

module.exports = app => app.use("/city", router);
