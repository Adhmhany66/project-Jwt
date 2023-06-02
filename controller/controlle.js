const jwt = require('jsonwebtoken')
const {BadRequestError} =require('../error')

const login =async(req,res,next)=>{
    const {username,password}=req.body

    if(!username || !password){
        return next ( new BadRequestError('please provide username and password'))
    }
    
    const id = new Date() .getDate()
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

    
  
    res.status(200).json({message:'Create is success',token})
}

const dashboard=async(req,res)=>{
    const luckNumber = Math.floor(Math.random()*100)
    res.status(200).json({message:`Hello ${req.user.username}`,
secret:`Here is your Authorized data, your luck number is ${luckNumber}`})
}
 



module.exports = {login,dashboard}