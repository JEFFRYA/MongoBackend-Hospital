/*
    RUTA: /api/usuarios
*/

const { Router } = require('express');
const { getUsuario, crearUsuario } = require('../controllers/usuarios.controllers');
const router = Router();


router.get( '/', getUsuario );

router.post( '/' , crearUsuario );

module.exports = router;