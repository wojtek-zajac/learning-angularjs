const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/`))

app.set('views', './views')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {title: 'Best App Ever'})
})

app.get('/postings', (req, res) => {
    res.render('postings', {title: 'Postings List'})
})

const server = app.listen(8080, () => {
    /* eslint-disable no-console */
    console.log(`App is running on port ${server.address().port}`)
    /* eslint-enable no-console */
})
