const {UnauthenticatedError} = require('../error/index')
const jwt = require('jsonwebtoken')

const authenticationMiddleware =async(req,res,next)=>{
    const authHeader = req.headers.authorization

    if(!authHeader || ! authHeader.startsWith('Bearer')){
        return next ( new UnauthenticatedError ("No token Provided"))
    }
    const token = authHeader.split(' ')[1]
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const {id, username} = decoded
        req.user = {id,username}
        next()

    }catch(error){  
        return next ( new UnauthenticatedError('No authorized to access this router'))
    }

}
module.exports = authenticationMiddleware