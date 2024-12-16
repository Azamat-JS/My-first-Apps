const express = require('express')
const path = require('path')
const app = express()


app.use(express.static('./time'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './time/time.html'))
})

app.all('*', (req, res) => {
 console.log('not found');
 res.status(404).send('resource not found') 
})

app.listen(3009, () => {
    console.log('server is running on port 3009...');
    
})