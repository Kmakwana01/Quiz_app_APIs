let mongoose = require("mongoose")

let question = new mongoose.Schema({
    que : String,
    option : [String],
    ans : String,
    category : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "cat"
    }]
})

let Cat_Schema = mongoose.model("que",question)

module.exports = Cat_Schema;