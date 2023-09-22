const express = require('express')

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
router.post('/', (req, res) => {
    res.json({mssg: 'POST a data'})
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