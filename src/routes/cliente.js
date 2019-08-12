const express = require('express');
const router = express.Router();

const ClienteCtrl = require('../controllers/cliente');

router.route('/cliente')
.get(ClienteCtrl.ListarClientes)
.post(ClienteCtrl.InsertarCliente)

module.exports = router;