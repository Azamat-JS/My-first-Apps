const {Router} = require('express')
const foodRouter = Router()
const {getData, getOne, addData, updateData, deleteData} = require('../controller/food.ctr')
const express = require('express')
const Food = require('../model/task')


foodRouter.get('/', getData)
foodRouter.post('/', addData)
foodRouter.get('/single/:id', getOne)
foodRouter.put('/update/:id', updateData)
foodRouter.delete('/delete/:id', deleteData)

module.exports = foodRouter