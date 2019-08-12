const db = require('../database/db');
const jwt = require('jsonwebtoken');

exports.Login = (req,res)=>{
  const username = req.body.username;
  const password = req.body.password;

  db.func('usuario_login',[username,password])
  .then(data=>{

    const token = jwt.sign({
      user:data[0]      
    },process.env.SEED || 'clave_token')

    res.status(200).json({
      success:true,
      data:data[0],
      token
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