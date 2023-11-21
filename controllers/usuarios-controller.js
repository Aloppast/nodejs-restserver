const { reponse } = require('express');

const usuariosGet = (req = request, res = reponse) => {
    //queryParams <-- Parámetros que vienen desde la URL
    // const params = req.query;
    const {q = 'qué', nombre = 'No name', apikey = null, page=1, limit= 1} = req.query;

    res.json({
        "msg": "get API - Controllador",
        q,
        nombre,
        apikey,
        page,
        limit
    });

}

const usuariosPut = (req, res = reponse) => {

    const id = req.params.id;

    res.json({
        "msg": "put API - Controllador",
        'id': id
    });

}

const usuariosPost = (req, res = reponse) => {
    //Cogemos el body que nos mandan en la petición (Sabemos que es JSON pero porque lo sabemos, realmente puede ser cualquier cosa)
    //const body = req.body; <-- Para coger todo el body
    const { nombre, apellido } = req.body;

    res.status(201).json({
        "msg": "post API - Controllador",
        "nombre": nombre,
        "apellido": apellido
    });

}

const usuariosDelete = (req, res = reponse) => {

    res.json({
        "msg": "delete API - Controllador"
    });

}

const usuariosPatch = (req, res = reponse) => {

    res.json({
        "msg": "patch API - Controllador"
    });

}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}