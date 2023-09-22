const express = require('express')
const GrowthRate = require('../models/growthRateModel')

const router = express.Router()

//GET all GDP Growth Rate data
router.get('/', (req, res) => {
    res.json({mssg: 'GET all data'})
})

//GET a single GDP Growth Rate data
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a data'})
})

//POST a GDP Growth Rate data
router.post('/', async (req, res) => {
    const {title, previous, current, next} = req.body
    try{
        const growthRate = await GrowthRate.create({title, previous, current, next})
        res.status(200).json(growthRate)
    }catch (error){
        res.status(400).json({error: error.message})
    }
})

//DELETE a GDP Growth Rate data
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a data'})
})

//UPDATE a GDP Growth Rate data
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a data'})
})

module.exports = router