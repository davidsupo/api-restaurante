const cors = require('cors');
const express = require('express');
const app = express();

const RoutesLogin = require('./routes/login');
const RoutesMesa = require('./routes/mesa');
const RoutesPlato = require('./routes/plato');
const RoutesRol = require('./routes/rol');
const RoutesUsuario = require('./routes/usuario');
const RoutesPersona = require('./routes/persona');
const RoutesPedido = require('./routes/pedido');
const RoutesCliente = require('./routes/cliente');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('PORT',process.env.PORT || 3000);

app.use('/api',RoutesLogin);
app.use('/api',RoutesMesa);
app.use('/api',RoutesPlato);
app.use('/api',RoutesRol);
app.use('/api',RoutesUsuario);
app.use('/api',RoutesPersona);
app.use('/api',RoutesPedido);
app.use('/api',RoutesCliente);



app.listen(app.get('PORT'),()=>{
  console.log(`Server run on port ${app.get('PORT')}`)
})
