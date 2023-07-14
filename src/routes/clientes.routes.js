import { Router } from "express";
import {clientesPrimium,prueba} from '../controllers/clientes.js'

const routes = Router()

routes.get('/clientes/primium',clientesPrimium)

routes.get('/clientes/prueba',prueba)

export default routes;