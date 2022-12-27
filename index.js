require('dotenv').config();

const express = require('express');
const { dbConection } = require('./database/config');
const cors = require('cors');

// crea el servidor de express
const app = express();

// configurar CORS
app.use(cors());

// base de datos
dbConection();
// console.log(process.env);

// rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola mundo'
    })
});

app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
});
