const {Router} = require('express')
const foodRouter = Router()

const {getAllFood, getSingleFood, createData, updateData, deleteData} = require('../controller/food')

foodRouter.get('/get_data', getAllFood)
foodRouter.get('/single/:id', getSingleFood)
foodRouter.post('/add_data', createData)
foodRouter.post('/update/:id', updateData)
foodRouter.post('/delete/:id', deleteData)

module.exports = foodRouter