require('dotenv').config()
require('express-async-errors')


const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')
const usersRouter = require('./routes/users.rt')

const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.json())

// routes

app.use('/api/v1/products', productsRouter)
app.use('/api/v1/auth', usersRouter)

// products route

app.use(notFound)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 4000

const start = async () => {
    try {
         await connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log(`working on http://localhost:${PORT}`))
    } catch (error) {
        console.log(error);
        
    }
}
start()