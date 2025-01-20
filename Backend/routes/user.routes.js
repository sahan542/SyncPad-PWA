const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../models/UserModel");
const { noteModel } = require("../models/NoteModel");

const userRouter = express.Router();

userRouter.get("/users", (req, res) => {
  res.send("All the users");
});

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    const user = new userModel({ name, email, password: hashedPassword });
    await user.save();
    res.send({
      message: "User created!",
      status: 1,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      status: 0,
    });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let option = {
    expiresIn: "3m"
  }
  try {
    let data = await userModel.find({ email });
    if (data.length !== 0) {
      let token = jwt.sign({ userId: data[0]._id }, "saurabh", option);
      bcrypt.compare(
        password,
        data[0].password,
        function (err, result) {
          if (err) {
            return res.send({
              message: "Something went wrong: " + err,
              status: 0,
            });
          }
          if (result) {
            res.send({
              message: "User Logged in successfully !",
              token: token,
              status: 1,
            });
          } else {
            res.send({
              message: "Incorrect Password",
              status: 0,
            });
          }
        }
      );
    } else {
      res.send({
        message: "User doesn't exists",
        status: 0,
      });
    }
  } catch (error) {}
});

module.exports = userRouter;
