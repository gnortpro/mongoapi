const connection = require("./model")
const mongoose = require("mongoose");
const express = require("express")
const application = express();
const path = require("path")
const expressHandlebars = require("express-handlebars");
const bodyparser = require("body-parser");

const CourseController = require("./controllers/courses")
const UserController = require("./controllers/user")

application.use(bodyparser.urlencoded({
    extended: true
}))

application.set('views', path.join(__dirname, "/views/"));
application.engine("hbs", expressHandlebars({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + "/views/layouts"
}))

application.set("view engine", "hbs")

application.get("/", (req, res) => {
    // res.send("<h1> Hello world </h1>")
    res.render("index", {})
})

application.use("/course", CourseController)
application.use("/user", UserController)


mongoose.connect("mongodb+srv://dbUser:hU3LD0Ud1pTualAn@cluster0-q0cs7.gcp.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true,  useUnifiedTopology: true },  (error) => {
  if (!error)
    {
      console.log("Success");
    }
    else {
      console.log("Error connect to DB",error);
    }
})

application.listen("3001", ()=> {
    console.log("Sever started");  
})