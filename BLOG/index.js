const express = require('express')
require('dotenv').config()
const expressLayout = require('express-ejs-layouts')
const connectDB = require('./server/config/db');
const mainEjs = require('./server/routes/main')
const app = express()

// connect to DB
connectDB()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

//-- Templating engines
app.use(expressLayout)
app.set('view engine', 'ejs')
app.set('layout', './layouts/main')


app.use(mainEjs )

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log('server is running on ' + PORT);  
})