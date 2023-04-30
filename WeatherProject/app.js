
const express = require('express')
const https = require('https')
const app = express()

const port = 3000

app.get('/', (req, res) => {

    const url = 'https://random-data-api.com/api/v2/users?size=2&is_xml=true'
    https.get(url, (response) => {
        response.on('data', (data) => {
            const randomData = JSON.parse(data)
            const title = randomData[0].employment.key_skill
            console.log(title)
        } )
    })

    res.send('work in progress')
})




app.listen(port, () => {
    console.log(`Your server is running on localhost:${port}` )
})

