
const express = require('express')
const https = require('https')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('work in progress')
})


app.listen(port, () => {
    console.log(`Your server is running on localhost:${port}` )
})

