const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./connectDB/connect')
const cors = require('cors')
// const bodyParser = require('body-parser')
const foodRouter = require('./router/food.rtr')
app.use(cors())
app.use(express.json())
app.use(foodRouter)

const FOOD = process.env.FOOD || 4000




const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(FOOD, console.log('server ' + FOOD))
    } catch (error) {
        console.log(error);
    }
}

start()