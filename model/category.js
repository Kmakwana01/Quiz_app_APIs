let mongoose = require("mongoose")

let category = new mongoose.Schema({
    name : String,
    image : String,
})

let Cat_Schema = mongoose.model("cat",category)

module.exports = Cat_Schema;