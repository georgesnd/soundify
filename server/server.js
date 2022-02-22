const express = require('express')


const SpotifyWebApi = require('spotify-web-api-node')


const app = express()


app.post('login', (req,res) => {

    const code= req.body.code
    const spotifyApi = SpotifyWebApi({
        redirectUri:"http://localhost:3000",
        clientId:'dcbbf4b7b8d342b8af54a2ee8341e308',
        clientSecret:'c5abbe54f1684933abc0239ee7adbfa5'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToke: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn:data.body.expires_in
        })
    }).catch(() => {
        res.sendStatus(400)
    })
})



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