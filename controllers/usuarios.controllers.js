const Usuario = require('../models/usuarios.models');

const getUsuario = async (req, res) => {

    const usuarios = await Usuario.find( {}, 'nombre role email google' );

    res.json({
        usuarios: [{
            usuarios
        }]
    })
}

const crearUsuario = async (req, res) => {

    const { nombre, email, password } = req.body;
    const usuario = new Usuario( req.body );

    await usuario.save();

    res.json({
        usuarios: [{
            usuario: usuario
        }]
    })
}

module.exports = {
    getUsuario,
    crearUsuario
}