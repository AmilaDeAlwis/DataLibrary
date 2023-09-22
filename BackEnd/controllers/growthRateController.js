const GrowthRate = require('../models/growthRateModel')
const mongoose = require('mongoose')

//get all data
const getGrowthRate = async (req, res) => {
    const growthRate = await GrowthRate.find({}).sort({createdAt: -1})
    res.status(200).json(growthRate)
}

//get a single data
const getSingleGrowthRate = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Records Found!'})
    }
    const growthRate = await GrowthRate.findById(id)
    if (!growthRate){
        return res.status(404).json({error: 'No Records Found!'})
    }
    res.status(200).json(growthRate)
}

//create new data
const createGrowthRate = async (req, res) => {
    const {title, previous, current, next} = req.body

    //add doc to db
    try{
        const growthRate = await GrowthRate.create({title, previous, current, next})
        res.status(200).json(growthRate)
    }catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a data
const deleteGrowthRate = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Records Found!'})
    }
    const growthRate = await GrowthRate.findOneAndDelete({_id: id})
    if (!growthRate){
        return res.status(400).json({error: 'No Records Found!'})
    }
    res.status(200).json(growthRate)
}

//update a data
const updateGrowthRate = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Records Found!'})
    }
    const growthRate = await GrowthRate.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!growthRate){
        return res.status(400).json({error: 'No Records Found!'})
    }
    res.status(200).json(growthRate)
}

module.exports = {getGrowthRate, getSingleGrowthRate, createGrowthRate, deleteGrowthRate, updateGrowthRate}