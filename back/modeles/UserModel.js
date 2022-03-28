const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String,
        minlength: 8,
    },
    firstname: String,
    lastname: String,
    surname: {
        type: String,
        unique: true
    },
    dateofbirth:{
        type: Date
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;