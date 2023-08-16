const express = require('express')
const router = express.Router()

const personController = require('../app/controllers/personCtrl')
const genderCall = require('../app/middlewares/gender')

router.get('/key/person', personController.list)
router.post('/key/person', genderCall, personController.create)
router.delete('/key/person/:id', personController.destroy )

module.exports = router