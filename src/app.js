const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/ProjetoAgenda',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('MongoDB conectado')
    })
    .catch((error) => {
        console.log('Não foi possível se conectar ao MongoDB')
    })

const agenda = require('./routes/agenda')

app.use(express.json())

app.use(cors())

app.use('/agenda', agenda)

module.exports = app