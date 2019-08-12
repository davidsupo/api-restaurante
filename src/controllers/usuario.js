const db = require('../database/db');
const randomstring = require('randomstring');
const transporter = require('../mail');

exports.ListarUsuarios = (req,res)=>{
  const estado = req.params.estado;

  db.func('usuario_listarusuario',estado)
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

exports.InsertarUsuario = (req,res)=>{
  const idpersona = req.body.idpersona;
  const email = req.body.email;
  const usuario = req.body.usuario;
  const idrol = req.body.idrol;
  const fechaingreso = req.body.fechaingreso;
  const altausuario = req.body.altausuario;

  const constrasenia = randomstring.generate({
    length:12,
    charset:'alphanumeric'
  })

  const mailOptions = {
    from : 'antonycalderonacosta29@gmail.com',
    to: email,
    subject: `BIENVENIDO ${usuario} - CLAVE GENERADA`,
    html: `
      <h2>Bienvenido usuario</h2>
      <p>Es un gusto que te integres a nuestra familia en el restaurante.</p>
      <p>Tu clave es: <span style="font-weight:bold">${constrasenia}</span></p>
      <small>Clave generada aleatoriamente.</small>
    `

  }

  db.func('usuario_insertarusuario',[idpersona,email,usuario,constrasenia,idrol,fechaingreso,altausuario])
  .then(data=>{
    transporter.sendMail(mailOptions,(err,info)=>{
      console.log(err)
      if(err) return res.status(502).json({success:false,message:err.message,err});
      res.status(200).json({
        success:true,
        mensaje:'Usuario registrado correctamente.'
      });
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

exports.ActualizarUsuario = (req,res)=>{
  const idusuario = req.body.idusuario;
  const idpersona = req.body.idpersona;
  const email = req.body.email;
  const usuario = req.body.usuario;
  const idrol = req.body.idrol;
  const fechaingreso = req.body.fechaingreso;
  const altausuario = req.body.altausuario;

  db.func('usuario_actualizarusuario',[idusuario,idpersona,email,usuario,idrol,fechaingreso,altausuario])
  .then(()=>{
    res.status(200).json({
      success:true,
      mensaje:'Usuario actualizado éxitosamente.'
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

exports.CambiarContrasenia = (req,res)=>{
  const usuario = req.body.usuario;
  const contraseniaNueva = req.body.contrasenianueva;
  const contraseniaActual = req.body.contraseniaactual;

  db.func('usuario_cambiarcontrasenia',[usuario,contraseniaActual,contraseniaNueva])
  .then(()=>{
    res.status(200).json({
      success:true,
      mensaje:'Contraseña actualizada correctamente'
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

exports.DeshabilitarUsuario = (req,res)=>{
  const idusuario = req.body.idusuario;
  const usuario = req.body.usuario;

  db.func('usuario_deshabilitarusuario',[idusuario,usuario])
  .then(()=>{
    res.status(200).json({
      success:true,
      mensaje:'El usuario fue deshabilitado éxitosamente.'
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

exports.HabilitarUsuario = (req,res)=>{
  const idusuario = req.body.idusuario;
  const usuario = req.body.usuario;

  db.func('usuario_habilitarusuario',[idusuario,usuario])
  .then(()=>{
    res.status(200).json({
      success:true,
      mensaje:'El usuario fue habilitado éxitosamente.'
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