const express = require('express');
const router = express.Router();
const expressJwt = require('express-jwt');

const MesaCtrl = require('../controllers/mesa');

router.use(expressJwt({secret:process.env.SEED || 'clave_token'}))

router.route('/mesa')
.get(MesaCtrl.ListarMesas)
.post(MesaCtrl.InsertarMesa)
.put(MesaCtrl.ActualizarMesa)

module.exports = router;