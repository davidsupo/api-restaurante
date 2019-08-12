const express = require('express')
const router = express.Router();
const expressJwt = require('express-jwt');

const PlatoCtrl = require('../controllers/plato');

router.route('/tipoplato')
.get(PlatoCtrl.ListarTipoPlato)

router.route('/plato')
.get(PlatoCtrl.ListarPlato)
.post(PlatoCtrl.InsertarPlato)
.put(PlatoCtrl.ActualizarPlato)

module.exports = router;