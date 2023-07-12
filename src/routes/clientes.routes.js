import { Router } from "express";
import {clientesPrimium} from '../controllers/clientes.js'

const routes = Router()

routes.get('/clientes/primium',clientesPrimium)

export default routes;