const express = require("express");
const { getAll } = require("../repositories/ufRepository");
const Uf = require("../models/Uf");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

// router.use(authMiddleware);

//index
router.get("/", async (req, res) => {
  await getAll(Uf, req, res);
});

module.exports = app => app.use("/uf", router);
