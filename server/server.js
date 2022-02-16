const express = require('express')
const app = express()
const users = require('../data/users').data
require('dotenv').config()
const port = process.env.PORT || 8080

app.get('/users', (req, res) => {
    console.log('request', users);
    res.send(users)
})

app.get('/', (req, res) => {
    console.log('this is from home');
    res.send('hello from home')
})


app.listen(port, () => console.log('hello from server' + port))