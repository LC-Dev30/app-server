import express from 'express';
//imports routes
import routeUsuarios from './routes/usuarios.routes.js';
import routeClientes from './routes/clientes.routes.js'

const app = express();

//configuracion de ejs
app.set('view engine','ejs')
app.set('views','./src/views')

//miderwalls
app.use(routeUsuarios);
app.use(routeClientes)

//puerto
app.listen(3000)




