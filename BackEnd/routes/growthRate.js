const express = require('express')
const {getGrowthRate, getSingleGrowthRate, createGrowthRate, deleteGrowthRate, updateGrowthRate} = require('../controllers/growthRateController')

const router = express.Router()

//GET all GDP Growth Rate data
router.get('/', getGrowthRate)

//GET a single GDP Growth Rate data
router.get('/:id', getSingleGrowthRate)

//POST a GDP Growth Rate data
router.post('/', createGrowthRate)

//DELETE a GDP Growth Rate data
router.delete('/:id', deleteGrowthRate)

//UPDATE a GDP Growth Rate data
router.patch('/:id', updateGrowthRate)

module.exports = router