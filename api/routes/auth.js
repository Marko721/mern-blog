const router = require("express").Router();

const { response } = require("express");
const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    response.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN

module.exports = router;