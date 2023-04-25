
const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
    res.send('Express joor')
})

app.get('/about', (req, res) => {
    res.send('<h1>My name is Excel<h1/>')
})

app.listen(port, () => {
    console.log(`Your server is running on localhost:${port}`)
})