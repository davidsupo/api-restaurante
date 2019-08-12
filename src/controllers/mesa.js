const db = require('../database/db');

exports.ListarMesas = (req,res)=>{
  const estado = true;

  db.func('mesa_listarmesa',estado)
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

exports.InsertarMesa = (req,res)=>{
  const numero = req.body.numero;
  const capacidad = req.body.capacidad;
  const usuario = req.body.usuario;

  db.func('mesa_insertarmesa',[numero,capacidad,usuario])
  .then(data=>{
    res.status(200).json({
      success:true,
      mensaje:'Mesa registrada éxitosamente.'
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

exports.ActualizarMesa = (req,res)=>{
  const idmesa = req.body.idmesa;
  const numero = req.body.numero;
  const capacidad = req.body.capacidad;
  const estado = req.body.estado;
  const usuario = req.body.usuario;

  db.func('mesa_actualizarmesa',[idmesa,numero,capacidad,estado,usuario])
  .then(data=>{
    res.status(200).json({
      success:true,
      mensaje:'Mesa actualizada éxitosamente.'
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