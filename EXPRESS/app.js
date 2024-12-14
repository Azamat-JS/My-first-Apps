const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('first Page')
})

app.get('/contact', (req, res) => {
    res.status(200).send('contact Page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>resourse not found</h1>')
})

app.listen(5001, () =>{
    console.log('server is running on the port 5001')})
//app.get
//app.post
//app.put
//app.delete
//app.listen
//app.use
//app.all