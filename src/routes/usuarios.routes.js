import {Router} from 'express'

import {Usuarios,Clientes,Inicio} from '../controllers/crud.js'

const router = Router()

//routes
router.get('/',Inicio)

router.get('/usuarios',Usuarios)

router.get('/clientes',Clientes)

export default router;