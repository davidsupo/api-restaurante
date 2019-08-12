const express = require('express');
const router = express.Router();

const PersonaCtrl = require('../controllers/persona');

router.route('/persona')
.get(PersonaCtrl.ListarPersonas)
.post(PersonaCtrl.InsertarPersona)
.put(PersonaCtrl.ActualizarPersona)

module.exports = router;