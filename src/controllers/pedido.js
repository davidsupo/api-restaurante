const db = require('../database/db')

exports.InsertarPedido = (req,res)=>{
  const idmesa = req.body.idmesa;
  const situacion = req.body.situacion;
  const tipo = req.body.tipo;
  const idusuario = req.body.idusuario;
  const platos = req.body.platos;
  const cantidades = req.body.cantidades;
  const usuario = req.body.usuario;

  db.func('pedido_insertarpedido',[idmesa,situacion,tipo,idusuario,platos,cantidades,usuario])
  .then(()=>{
    res.status(200).json({
      success:true,
      mensaje:'Pedido registrado éxitosamente.'
    })
  })
  .catch(err=>{
    res.status(500).json({
      success:false,
      mensaje:err.message,
      err
    })
  })
}

exports.ListarPedidosPendientes = (req,res)=>{
  db.func('pedido_listarpedidospendientes')
  .then(data=>{
    res.status(200).json({
      success:true,
      data
    })
  })
  .catch(err=>{
    res.status(500).json({
      success:false,
      mensaje:err.message,
      err
    })
  })
}

exports.ListarDetallePedido = (req,res)=>{
  const idpedido = req.params.idpedido;

  db.func('pedido_detallepedido',idpedido)
  .then(data=>{
    res.status(200).json({
      success:true,
      data
    })
  })
  .catch(err=>{
    res.status(500).json({
      success:false,
      mensaje:err.message,
      err
    })
  })
}

exports.AnularPedido = (req,res)=>{
  const idpedido = req.body.idpedido;
  const usuario = req.body.usuario;

  db.func('pedido_anularpedido',[idpedido,usuario])
  .then(()=>{
    res.status(200).json({
      success:true,
      mensaje:'Pedido anulado éxitosamente.'
    })
  })
  .catch(err=>{
    res.status(500).json({
      success:false,
      mensaje:err.message,
      err
    })
  })
}

exports.DespacharPedido = (req,res)=>{
  const idpedido = req.body.idpedido;
  const usuario = req.body.usuario;

  db.func('pedido_despacharpedido',[idpedido,usuario])
  .then(()=>{
    res.status(200).json({
      success:true,
      mensaje:'Pedido despachado éxitosamente.'
    })
  })
  .catch(err=>{
    res.status(500).json({
      success:false,
      mensaje:err.message,
      err
    })
  })
}

exports.PagarPedidos = (req,res)=>{
  const pedidos = req.body.pedidos;
  const numero = req.body.numero;
  const cliente = req.body.cliente;
  const usuario = req.body.usuario;

  db.func('pedido_pagarpedido',[pedidos,numero,cliente,usuario])
  .then(()=>{
    res.status(200).json({
      success:true,
      mensaje:'Pedido pagado éxitosamente.'
    })
  })
  .catch(err=>{
    res.status(500).json({
      success:false,
      mensaje:err.message,
      err
    })
  })
}