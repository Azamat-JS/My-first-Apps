const express = require('express')
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')
const { read_file } = require('./api/api')
const dataMain = read_file('food.json')
const path = require('path')
const foodRouter = require('./router/food.route')

const app = express()
const FOOD = process.env.FOOD || 4000
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(foodRouter)




app.listen(FOOD, () => {
    console.log('working!' + FOOD);
})


