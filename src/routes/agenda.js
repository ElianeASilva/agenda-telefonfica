const express = require('express')
const router = express.Router()
const agendaController = require('../controllers/agenda')

//@router POST api/agenda/new
//@desc Criar novo contato na agenda
//@access Public
router.post('/new', agendaController.createNewContact)

//@router GET api/agenda/view-all
//@desc Visualiza todos os contatos salvos na agenda
//@access Public
router.get('/view-all', agendaController.getAll)

//@router GET api/agenda/by-name
//@desc Busca contatos pelo nome
//@access Public
router.get('/by-name', agendaController.getByName)

//@router GET api/agenda/by-phone
//@desc Busca contatos pelo telefone
//@access Public
router.get('/by-phone', agendaController.getByPhone)

//@router PUT api/agenda/update-contact/:id
//@desc Atualiza todo o contato através do ID informado
//@access Public
router.put('/update-contact/:id', agendaController.updateContact)

//@router PATCH api/agenda/update-phone/:id
//@desc Atualiza apenas o campo "phone" através do ID informado
//@access Public
router.patch('/update-phone/:id', agendaController.updatePhone)

//@router DELETE api/agenda/delete/:id
//@desc Deleta o contato da agenda através do ID informado
//@access Public
router.delete('/delete/:id', agendaController.deleteContact)


module.exports = router