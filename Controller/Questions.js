let QUE = require("../model/que")

exports.add = async (req, res) => {
    try {
      console.log(req.body)

      if (!req.body.que | !req.body.ans | !req.body.option) {
        throw new Error("please enter valid data")
      }

      let data = await QUE.create(req.body)
  
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
      let data = await QUE.find().populate("category");

      if (!data.length) {
        throw new Error("nto found data")
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

  exports.update =  async (req, res) => {
    try {
      // let id = req.query.id
      if (!req.query.id) {
        throw new Error("please enter id")
      }
      
      await QUE.findByIdAndUpdate(req.query.id, req.body)

      let data = await QUE.findById(req.query.id)
  
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

  exports.delete = async (req, res) => {
    try {
      let id = req.query.id

      if (!id) {
        throw new Error("please enter id")
      }

      let data = await QUE.findByIdAndDelete(id)

      res.status(200).json({
        status: "success",
        data: data
      })
      
    } catch (error) {
      res.status({
        status: "fail",
        message: error.message
      })
    }
  }