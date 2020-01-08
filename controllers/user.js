const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const UserModel = mongoose.model("User");

router.get("/add", (req, res)=>{
    res.render("user/add-user")
});

router.post("/add", (req, res)=>{
    
    var course = new UserModel();
    course.userName = req.body.userName;
    course.userAvatar = req.body.userAvatar;
    course.userID = Math.ceil(Math.random() * 1000000) ;
    course.save((err, doc)=>{
        if (!err) {
            res.redirect("/user/list")
        }
        else {
            res.send(err)
        }
    });
});

router.get("/list", (req, res) => {
    UserModel.find((err, docs) => {
        if(!err) {
            res.render("user/list", {data : docs});
        } else {
            res.send(err);
        }
    });
    // res.send("Course Controller")
});

module.exports = router;
