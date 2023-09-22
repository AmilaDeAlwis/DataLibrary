require('dotenv').config()

const express = require('express')
const growthRateRoutes = require('./routes/growthRate')

//express app
const app = express()

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/growthRate', growthRateRoutes)

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})