//DEPENDENCIES
const express = require('express')
const app = express()

//QUERIES
const db = require('./queries')


//PORT FOR SERVE
const port = 4000


app.use(express.json());

//API OPERATIONS

app.get('/employee',db.getEmployee)

/*
app.post('/employee', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})


app.delete('/employee', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

*/

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})