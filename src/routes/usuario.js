const express = require('express');
const router = express.Router();

const UsuarioCtrl = require('../controllers/usuario');

router.route('/usuario')
.post(UsuarioCtrl.InsertarUsuario)
.put(UsuarioCtrl.ActualizarUsuario)
.patch(UsuarioCtrl.CambiarContrasenia)
.lock(UsuarioCtrl.DeshabilitarUsuario)
.unlock(UsuarioCtrl.HabilitarUsuario)

router.route('/usuario/:estado')
.get(UsuarioCtrl.ListarUsuarios);

module.exports = router;