import express, { Application} from 'express';
import clientRoutes from './../routes/client';
import cors from 'cors';
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        clients: '/api/clients'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        
        this.dbConnection();
        this.middlewares(); 
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log(`La base de datos online`);
        } catch (error) {
            
        }
    }

    middlewares() {
        //CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );

        //carpeta publica
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.apiPaths.clients, clientRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}

export default Server;