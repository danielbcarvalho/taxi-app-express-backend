const express = require('express')
const mongoose = require('mongoose')

const PORT = 4000;
const app = express()

const mongoDbConnectionString = require('./mongoDbConnectionString')

const user = { name: 'Daniel', password: '1234' }

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const Test = mongoose.model('Test', UserSchema)

app.get('/users', (req, res) => {
    res.send('bacana')
})

app.post('/users', (req, res) => {
    Test.create(user)
        .then(userPost => {
            console.log(userPost)
        })
        .catch(err => {
            console.log(err)
        })
})

mongoose.
    connect(mongoDbConnectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(result => {
        console.log('Coneected to MongoDB')
        app.listen(PORT, () => {
            console.log("Serve is listening on PORT: " + PORT)
        })
    })
    .catch(err => {
        console.log(err)
    })

