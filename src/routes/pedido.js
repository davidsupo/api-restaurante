const express = require('express');
const router = express.Router();

const PedidoCtrl = require('../controllers/pedido');

router.route('/pedido')
.post(PedidoCtrl.InsertarPedido)
.put(PedidoCtrl.DespacharPedido)
.patch(PedidoCtrl.PagarPedidos)
.lock(PedidoCtrl.AnularPedido)

router.route('/pedidospendientes')
.get(PedidoCtrl.ListarPedidosPendientes)

router.route('/pedido/:idpedido')
.get(PedidoCtrl.ListarDetallePedido)

module.exports = router;