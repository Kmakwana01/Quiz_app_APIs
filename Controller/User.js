const USER = require("../model/user");
const JsonWebToken = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.signup = async function (req, res, next) {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            throw new Error('please enter valid fields')
        }

        req.body.password = await bcrypt.hash(password, 8)
        console.log(req.body)

        let user = await USER.create(req.body)

        const token = JsonWebToken.sign({ id: user._id },  process.env.quiz_app);

        res.status(201).json({
            message: "User create successful",
            data: user,
            token
        })

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}


exports.login = async function (req, res, next) {

    try {
        const { email, password } = req.body

        if (!email || !password) {
            throw new Error('please enter valid fields')
        }

        const user = await USER.findOne({ email })

        if (!user) {
            throw new Error("Email is not valid")
        }

        const checkPass = await bcrypt.compare(password, user.password)

        if (!checkPass) {
            throw new Error('please enter valid password')
        }

        const token = JsonWebToken.sign({ id: user._id }, process.env.quiz_app);

        res.status(201).json({
            message: "User create successful",
            data: user,
            token
        })

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}
