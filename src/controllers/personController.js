const express = require("express");
const {
  getAll,
  getById,
  created,
  updated,
  deleted
} = require("../repositories/personRepository");
const Person = require("../models/Person");
const authMiddleware = require("../middleware/auth");
const router = express.Router();

// router.use(authMiddleware);

//index
router.get("/", async (req, res) => {
  await getAll(Person, req, res);
});

// show
router.get("/:id", async (req, res) => {
  await getById(Person, req, res);
});

// create
router.post("/", async (req, res) => {
  await created(Person, req, res);
});

//update
router.put("/:id", async (req, res) => {
  await updated(Person, req, res);
});

//delete
router.delete("/:id", async (req, res) => {
  await deleted(Person, req, res);
});

module.exports = app => app.use("/person", router);
