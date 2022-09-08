const express = require('express')
const cors = require('cors');
const sequelize = require("../config/db");
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //routes
        //this.authRouter='/api/auth';
        this.usuarioRouter='/api/auth';
        //conectar a la BD
        this.conectarDB();
        //Middleware
        this.middlewares();
        //rutas de mi aplicacion
        this.routes();
    }
   

    async conectarDB(){
        await sequelize.sync().then(() => console.log("Conexion exitosa a la base de datos"));
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'));
    }
    routes() {
        //this.app.use(this.authRouter,require('../routes/auth.route'))
        this.app.use(this.usuarioRouter,require('../routes/user.route'))
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto","localhost:"+this.port)
        })
    }
}
module.exports = Server;