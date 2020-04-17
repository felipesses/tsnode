import { Router } from 'express'

import UserController from './controllers/UserController'

const routes = Router()

routes.get('/users', UserController.index)
routes.get('/post', UserController.create)

export default routes
