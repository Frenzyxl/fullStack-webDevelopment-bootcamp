
const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()

app.engine('html', require('ejs').renderFile)
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
            const theData = JSON.parse(data)
            if (response.statusCode === 200 && !theData.errors[0]) {
                res.sendFile(__dirname + '/sucess.html')
            } else {
                res.render(__dirname +'/failure.html', {error:theData.errors[0].error})
            }
            
        })
    })

    request.write(jsonData)
    request.end()
})

app.post('/failure', (req, res) => {
    res.redirect('/')
})



app.listen(port, () => {
    console.log(`Your server is running on localhost:${port}`)
})