const express = require('express');
const cors = require('cors')

class Server {

    constructor() {
        this.port = process.env.PORT || 3000;
        this.app = express();
        this.usuariosPath = '/api/usuarios';
        //Middlewares
        this.middlewares();
        //rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use( cors() );

        //Lectura y parseo del body
        this.app.use( express.json() );

        //Directorio público
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log("Servidor arrancado en el puerto ", process.env.PORT);
        })
    }



}

module.exports = Server;
