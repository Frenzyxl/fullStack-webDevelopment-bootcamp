
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

const port = 3001

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)

    var result = num1 + num2

    res.send('The answer is ' + result )
})

app.get('/bmiCalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmiCalculator', (req, res) => {
    var weight = parseFloat(req.body.weight)
    var height = parseFloat(req.body.height)

    var result = weight/(height) ** 2

    res.send('Your BMI is ' + result.toFixed(2))
})




app.listen(port, () => {
    console.log(`Your server is running on localhost:${port}`)
})