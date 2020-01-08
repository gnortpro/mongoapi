const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: "Required"
    },
    userName : {
        type: String
    },
    userAvatar: {
        type: String
    }
})

mongoose.model("User", UserSchema)