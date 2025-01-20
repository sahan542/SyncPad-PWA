const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authenticator } = require("../middlewares/authenticator");
const { noteModel } = require("../models/NoteModel");

const noteRouter = express.Router();
noteRouter.use(authenticator);

//get notes
noteRouter.get("/notes", async (req, res) => {
  let token = req.headers.authorization;
  const rawToken = token.split(" ")[1];

  jwt.verify(rawToken, "saurabh", async (err, decode) => {
    try {
      let data = await noteModel.find({ user: decode.userId });
      res.send({
        data: data,
        message: "Success",
        status: 1,
      });
    } catch (error) {
      res.send({
        message: error.message,
        status: 0,
      });
    }
  });
});

//create-notes
noteRouter.post("/create", async (req, res) => {
  try {
    let note = new noteModel(req.body);
    await note.save();
    res.send({
      message: "Note Created",
      status: 1,
    });
  } catch (error) {
    res.send({
      message: error.message,
      status: 0,
    });
  }
});

//update-notes
noteRouter.patch("/update/:id", async(req,res) => {
    let {id} = req.params;
    try{
        await noteModel.findByIdAndUpdate({_id:id}, req.body)
        res.send({
            message: "Note updated",
            status: 1,
        });
    }
    catch(error){
        res.send({
            message: error.message,
            status: 0,
        });
    }
});

//delete-notes
noteRouter.delete("/delete/:id", async(req,res) => {
    let {id} = req.params;
    try{
        await noteModel.findByIdAndDelete({_id:id});
        res.send({
            message: "Note deleted",
            status: 1,
        });
    }
    catch(error){
        res.send({
            message: error.message,
            status: 0,
        });
    }
});

module.exports = noteRouter;
