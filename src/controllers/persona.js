const db = require('../database/db');

exports.ListarPersonas = (req,res)=>{
  db.func('persona_listarpersona')
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

exports.InsertarPersona = (req,res)=>{
  const nombres = req.body.nombres;
  const apellidopaterno = req.body.apellidopaterno;
  const apellidomaterno = req.body.apellidomaterno;
  const dni = req.body.dni;
  const fechanacimiento = req.body.fechanacimiento;
  const sexo = req.body.sexo;
  const telefono = req.body.telefono;
  const celular = req.body.celular;
  const email = req.body.email;
  const usuario = req.body.usuario;

  db.func('persona_insertarpersona',[nombres,apellidopaterno,apellidomaterno,dni,fechanacimiento,sexo,telefono,celular,email,usuario])
  .then(()=>{
    res.status(200).json({
      success:true,
      mensaje:'Persona registrada éxitosamente.'
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

exports.ActualizarPersona = (req,res)=>{
  const idpersona = req.body.idpersona;
  const nombres = req.body.nombres;
  const apellidopaterno = req.body.apellidopaterno;
  const apellidomaterno = req.body.apellidomaterno;
  const dni = req.body.dni;
  const fechanacimiento = req.body.fechanacimiento;
  const sexo = req.body.sexo;
  const telefono = req.body.telefono;
  const celular = req.body.celular;
  const email = req.body.email;
  const usuario = req.body.usuario;

  db.func('persona_actualizarpersona',[idpersona,nombres,apellidopaterno,apellidomaterno,dni,fechanacimiento,sexo,telefono,celular,email,usuario])
  .then(()=>{
    res.status(200).json({
      success:true,
      mensaje:'Persona actualizada éxitosamente.'
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