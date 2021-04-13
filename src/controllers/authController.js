const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const auth = require("../services/auth");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { email } = req.body;
  const findUser = await User.findOne({ email });

  try {
    if (findUser) return res.status(400).send({ error: "User already exists" });
    const user = await User.create(req.body);

    user.password = undefined;

    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: "Registration failed" });
  }
});

router.post("/authenticate", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  if (!user) return res.status(400).send({ error: "User not found" });

  const findPassword = await bcrypt.compare(password, user.password);
  if (!findPassword) return res.status(400).send({ error: "Invalid password" });

  user.password = undefined;

  return res.send({ user, token: auth.generateToken({ id: user.id }) });
});

module.exports = app => app.use("/auth", router);
