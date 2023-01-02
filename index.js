require('dotenv').config();

const express = require('express');
const { dbConection } = require('./database/config');
const cors = require('cors');

// crea el servidor de express
const app = express();

// configurar CORS
app.use( cors() );

// lectura y parseo del body
app.use( express.json() );

// base de datos
dbConection();
// console.log(process.env);

// rutas
app.use( '/api/usuarios', require('./routes/usuarios.routes') );


app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
});
