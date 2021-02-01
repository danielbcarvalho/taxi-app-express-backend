const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const mongoDbConnectionString = require('./config/mongodb')
const userRouter = require('./routes/user')
const PORT = 4000;
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/users', userRouter)

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

