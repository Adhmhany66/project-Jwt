const notFound = (req,res)=>{
    res.status(404).json({message:'Router does not exist'})
}
module.exports = notFound;