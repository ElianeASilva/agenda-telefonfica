const mongoose = require('mongoose')
const { Schema } = mongoose

const agendaSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: Number, unique: true, required: true },
    email: { type: String, required: true },
    othersPhones: { type: Number }
},
    { timestamp: true })

const Agenda = mongoose.model('Agenda', agendaSchema)

module.exports = Agenda