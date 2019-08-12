const db = require('../database/db');

exports.InsertarCliente = (req,res)=>{
  const idpersona = req.body.idpersona;
  const usuario = req.body.usuario;

  db.func('cliente_insertarcliente',[idpersona,usuario])
  .then(()=>{
    res.status(200).json({
      success:true,
      mensaje:'Cliente registrado éxitosamente.'
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

exports.ListarClientes = (req,res)=>{
  db.func('cliente_listarcliente')
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