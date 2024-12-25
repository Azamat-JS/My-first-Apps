const express = require('express')
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')
const { read_file } = require('./api/api')
const dataMain = read_file('phone.json')
const path = require('path')
const phoneRouter = require('./router/phone.route')

const app = express()
const PHONE = process.env.PHONE || 4000
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(phoneRouter)




app.listen(PHONE, () => {
    console.log('working!' + PHONE);
})