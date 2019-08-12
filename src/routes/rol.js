const express = require('express');
const router = express.Router();

const RolCtrl = require('../controllers/rol');

router.route('/rol')
.post(RolCtrl.InsertarRol)
.put(RolCtrl.ActualizarRol)

router.route('/rol/:estado')
.get(RolCtrl.ListarRol)

module.exports = router;