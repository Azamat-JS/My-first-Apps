require('dotenv').config()
require('express-async-errors')
const cors = require('cors')
const express = require('express')
const authRouter = require('./routes/auth.rt')
const centerRouter = require('./routes/center.rt')
const connectDB = require('./db/connect')
const authenticateOwner = require('./middleware/authenticate')

const app = express()
app.use(express.json())
app.use(cors())
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/notFound')

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/center',authenticateOwner, centerRouter)

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

const PORT = process.env.PORT || 4000

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log(`server is running on ${PORT}`))
    } catch (error) {
        console.error(error);
        
    }
}
start()