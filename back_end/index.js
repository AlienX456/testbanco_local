const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/employee', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})


app.post('/employee', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})


app.delete('/employee', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})