let CAT = require("../model/category")

exports.add = async (req, res) => {
  console.log(req.body, "-------------", req.files, "---------------")
  if (req.files.image[0].filename) {
    req.body.image = req.files.image[0].filename
  }

  try {
    if (!req.body.name || !req.body.image) {
      throw new Error("please enter new data")
    }

    let data = await CAT.create(req.body)

    res.status(200).json({
      status: "success",
      data: data
    })
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message
    })
  }
}

exports.show = async (req, res) => {
  try {
    let data = await CAT.find()
    res.status(200).json({
      message: "success",
      data: data
    })
  } catch (error) {
    res.status(400).json({
      satatus: "fail",
      message: error.message
    })
  }
}

exports.updates = async (req, res) => {

  try {
    let id = req.query.id
    if (req.files.image[0].filename) {
      req.body.image = req.files.image[0].filename
    }
    if (!id) {
      throw new Error("please enter id")
    }
    
    await CAT.findByIdAndUpdate(id, req.body)
    let data = await CAT.findById(id)

    if (!data) {
      throw new Error("please enter valid id and data")
    }
    res.status(200).json({
      status: "success",
      data: data
    })

  } catch (error) {
    res.status(400).json({
      message: "fail",
      message: error.message
    })
  }
}

exports.delete = async (req, res) => {
  try {
    let id = req.query.id

    if (!id) {
      throw new Error("please enter id")
    }
    let data = await CAT.findByIdAndDelete(id)
    if (!data) {
      throw new Error("please enter valid id")
    }
    res.status(200).json({
      status: "success",
      data: data
    })
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message
    })
  }
}