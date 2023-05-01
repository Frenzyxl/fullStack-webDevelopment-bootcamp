
const express = require('express')
const https = require('https')
const app = express()

const port = 3000

app.get('/', (req, res) => {

    const url = 'https://random-data-api.com/api/v2/users?size=2&is_xml=true'
    https.get(url, (response) => {
        response.on('data', (data) => {
            const randomData = JSON.parse(data)
            const title = randomData[0].employment.title
            const skill = randomData[0].employment.key_skill
            res.write(`<h1>Your name is ${randomData[0].last_name} ${randomData[0].first_name}<h1/>`)
            res.write(`<h2>You work as a ${title} and you must have ${skill} capabilities<h2/>`)
            res.send()
        } )
    })
})



app.listen(port, () => {
    console.log(`Your server is running on localhost:${port}` )
})

