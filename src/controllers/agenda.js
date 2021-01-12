const mongoose = require('mongoose')
const Agenda = require('../models/Agenda');

exports.createNewContact = (req, res) => {
    const { name, phone, email, othersPhones } = req.body

    try {
        const newContact = new Agenda({
            name,
            phone,
            email,
            othersPhones
        })
        Agenda.findOne({ phone: phone })
            .then(existingPhone => {

                if (existingPhone) {
                    return res.status(400).json({ error: `Existing number! Register a new one.` })
                }
                newContact.save()
                    .then(newContact =>
                        res.status(200).json(newContact))
                    .catch(error =>
                        res.status(500).json({ error: `Unable to save.` }))
            })
    } catch (error) {
        return res.status(400).json({ error: `Error when registering.` })
    }
}

exports.getAll = (req, res) => {
    Agenda.find()
        .then((agenda) => {
            res.status(200).json(agenda)
        })
        .catch((error) => {
            res.status(400).json({ error: `There are no records.` })
        })
}

exports.getByName = (req, res) => {
    const name = req.query.name

    Agenda.findOne({ name: name })
        .then((name) => {
            res.status(200).json(name)
        })
        .catch((error) => {
            res.status(400).json({ error: `Name not found.` })
        })
}

exports.getByPhone = (req, res) => {
    const phone = req.query.phone

    Agenda.findOne({ phone: phone })
        .then((contact) => {
            res.status(200).json(contact)
        })
        .catch((erro) => {
            res.status(400).json({ error: `Number not found.` })
        })
}

exports.updateContact = (req, res) => {
    const { id } = req.params

    Agenda.findByIdAndUpdate(id, req.body)
        .then(() => {
            res.status(200).json({ message: `Contact updated successfully.` })
        })
        .catch((error) => {
            res.status(400).json({ error: `Error while updating, please try again.` })
        })
}

exports.updatePhone = (req, res) => {
    const { id } = req.params
    const { phone } = req.body

    Agenda.findByIdAndUpdate(id, { $set: { phone } })
        .then(() => {
            res.status(200).json({ message: `Phone updated successfully!` })
        })
        .catch((error) => {
            res.status(400).json({ error: `Error while deleting` })
        })
}

exports.deleteContact = (req, res) => {
    const { id } = req.params

    Agenda.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({ message: `Deleted contact!` })
        })
        .catch((error) => {
            res.status(400).json({ error: `Unable to delete contact.` })
        })
}

