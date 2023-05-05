
const express = require('express')
const request = require('request')
const app = express()

app.use(express.static('public'))

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

const port = 3000


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html')
})

app.post('/', (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    
    var data = {
        members: [
            {
                email_address: email,
                status: 'subscribed'
            }
        ]
    }



    res.send()
})

app.listen(port, () => {
    console.log(`Your server is running on localhost:${port}`)
})