import { Router } from "express";
import {clientesPrimium,prueba} from '../controllers/clientes.js'
import {clientesActivos} from '../controllers/crud.js'

const routes = Router()

routes.get('/clientes/primium',clientesPrimium)

routes.get('/clientes/prueba',prueba)

routes.get('/clientes/activos',clientesActivos)

export default routes;