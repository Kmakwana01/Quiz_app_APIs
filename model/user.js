let mongoose = require("mongoose")

let user = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

let User_Schema = mongoose.model("user",user)

module.exports = User_Schema;