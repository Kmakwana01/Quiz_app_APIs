const jsonwebtoken = require("jsonwebtoken")

exports.SECURE = async (req,res,next)=>{
   try {
    console.log(req.headers)
     let token = req.headers.token 
    
     if(!token) throw new Error('Please attached token')
        
     let user = await jsonwebtoken.verify(token ,  process.env.quiz_app)

     if(!user) throw new Error('not valid token')

     console.log(user)
     req.userId = user.id
     next()
   } catch (error) {
    res.status(404).json({
        message: error.message,
    })
   }
}