require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const growthRateRoutes = require('./routes/growthRate')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/growthRate', growthRateRoutes)

//connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
        console.log('Connected to the DB and listening on port', process.env.PORT)
})
    })
    .catch((error) => {
        console.log(error)
    })