const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

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