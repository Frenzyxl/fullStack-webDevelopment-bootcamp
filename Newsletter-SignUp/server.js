
const express = require('express')
const request = require('request')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

const port = 3000


app.get('/', (req, res) => {
    res.send('works')
})


app.listen(port, () => {
    console.log(`Your server is running on localhost:${port}`)
})