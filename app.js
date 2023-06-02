const express =require('express')
const router = require('./routers/router')
require('dotenv').config()

require('express-async-errors')

const notFoundMiddleware = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler')



const app =express()
app.use(express.json())
app.use('/api/v1',router)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.PORT | 3000
app.listen(port,()=>{
    console.log(`server is running in port ${port}`)
})