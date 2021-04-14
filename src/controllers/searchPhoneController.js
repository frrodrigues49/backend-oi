const express = require("express");
const { getAll } = require("../repositories/phoneRepository");
const Person = require("../models/Person");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

// router.use(authMiddleware);

//index
router.post("/", async (req, res) => {
  await getAll(Person, req, res);
});

module.exports = app => app.use("/phone", router);
