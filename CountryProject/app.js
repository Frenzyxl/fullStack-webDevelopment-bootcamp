
const express = require('express')
const https = require('https')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    const countryName = req.body.countryName
    const url = `https://restcountries.com/v3.1/name/${countryName}`
    https.get(url, (response) => {
        response.on('data', (data) => {
            const randomData = JSON.parse(data)
            const capital = randomData[0].capital
            res.write(`The Capital of ${countryName} is ${capital}`)
            res.send()
        } )
    })
    
})

    
app.listen(port, () => {
    console.log(`Your server is running on localhost:${port}` )
})

