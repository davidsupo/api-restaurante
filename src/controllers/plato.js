const db = require('../database/db');

exports.ListarTipoPlato = (req,res)=>{
  db.func('tipoplato_listartipoplato')
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

exports.ListarPlato = (req,res)=>{
  const tipoplato = req.body.tipoplato? req.body.tipoplato:null;

  db.func('plato_listarplato',tipoplato)
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

exports.InsertarPlato = (req,res)=>{
  const codigo = req.body.codigo;
  const nombre = req.body.nombre;
  const descripcion = req.body.descripcion;
  const precio = req.body.precio;
  const idtipoplato = req.body.idtipoplato;
  const usuario = req.body.usuario;

  db.func('plato_insertarplato',[codigo,nombre,descripcion,precio,idtipoplato,usuario])
  .then(data=>{
    res.status(200).json({
      success:true,
      mensaje:'Plato registrado éxitosamente.'
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

exports.ActualizarPlato = (req,res)=>{
  const idplato = req.body.idplato;
  const codigo = req.body.codigo;
  const nombre = req.body.nombre;
  const descripcion = req.body.descripcion;
  const precio = req.body.precio;
  const idtipoplato = req.body.idtipoplato;
  const estado = req.body.estado;
  const usuario = req.body.usuario;

  db.func('plato_actualizarplato',[idplato,codigo,nombre,descripcion,precio,idtipoplato,estado,usuario])
  .then(data=>{
    res.status(200).json({
      success:true,
      mensaje:'Plato actualizado éxitosamente.'
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