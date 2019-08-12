const db = require('../database/db')

exports.InsertarRol = (req,res)=>{
  const descripcion = req.body.descripcion;
  const usuario = req.body.usuario;

  db.func('rol_insertarrol',[descripcion,usuario])
  .then(data=>{
    res.status(200).json({
      success:true,
      mensaje:'Rol registrado éxitosamente'
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

exports.ListarRol = (req,res)=>{
  const estado = req.params.estado;

  db.func('rol_listarrol',estado)
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

exports.ActualizarRol = (req,res)=>{
  const idrol = req.body.idrol;
  const descripcion = req.body.descripcion;
  const estado = req.body.estado;
  const usuario = req.body.usuario;

  db.func('rol_actualizarrol',[idrol,descripcion,estado,usuario])
  .then(data=>{
    res.status(200).json({
      success:true,
      mensaje:'Rol actualizado éxitosamente'
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