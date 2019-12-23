const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ToDoApp", { useNewUrlParser: true,  useUnifiedTopology: true },  (error) => {
  if (!error)
    {
      console.log("Success");
    }
    else {
      console.log("Error connect to DB");
    }
})

const Course = require("./course.model")