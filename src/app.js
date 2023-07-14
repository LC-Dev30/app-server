import express from 'express';
import dotenv from 'dotenv';
dotenv.config({path:'./src/.env'})
import {join,dirname} from 'path'
import {fileURLToPath} from 'url'

//imports routes
import routeUsuarios from './routes/usuarios.routes.js';
import routeClientes from './routes/clientes.routes.js'

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url))

//configuracion de ejs
app.set('view engine','ejs')
app.set('views',join(__dirname,'views'))

//miderwalls
app.use(routeUsuarios);
app.use(routeClientes)


//puerto
app.listen(process.env.PORT || 3000)





