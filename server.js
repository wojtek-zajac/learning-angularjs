const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(__dirname + '/'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.get('/postings', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/postings.html'))
})

const server = app.listen(8080, () => {
    console.log(`App is running on port ${server.address().port}`)
})
