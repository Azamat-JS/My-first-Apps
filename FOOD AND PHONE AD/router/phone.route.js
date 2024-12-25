const {Router} = require('express')
const phoneRouter = Router()

const {getAllFood, getSingleFood, createData, updateData, deleteData} = require('../controller/phone')

phoneRouter.get('/get_data', getAllFood)
phoneRouter.get('/single/:id', getSingleFood)
phoneRouter.post('/add_data', createData)
phoneRouter.post('/update/:id', updateData)
phoneRouter.post('/delete/:id', deleteData)

module.exports = phoneRouter