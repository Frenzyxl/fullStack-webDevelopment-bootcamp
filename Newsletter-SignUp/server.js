
const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html')
})

app.post('/', (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const url = `https://us17.api.mailchimp.com/3.0/lists/${process.env.AUDIENCE_ID}`

    const options = {
        method: 'POST',
        auth: `frenzyxl:${process.env.MAILCHIMP_API}`
    }

    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data)

    const request = https.request(url, options, (response) => {
        response.on('data', (data) => {
            console.log(JSON.parse(data))
        })
    })

    request.write(jsonData)
    request.end()

})



app.listen(port, () => {
    console.log(`Your server is running on localhost:${port}`)
})