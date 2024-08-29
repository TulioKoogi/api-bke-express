import express from 'express'
import userList from '../controllers/controllerUser/userList.js'
import userById from '../controllers/controllerUser/userById.js'
import editUser from '../controllers/controllerUser/editUser.js'
import createUser from '../controllers/controllerUser/createUser.js'
import editNameUser from '../controllers/controllerUser/editNameUser.js'
import deleteUser from '../controllers/controllerUser/deleteUser.js'


const router = express.Router()
  
  router.post('/', createUser)
  router.get('/list', userList)
  router.get('/:id', userById)
  router.put('/:id', editUser)
  router.patch('/:id', editNameUser)
  router.delete('/:id', deleteUser)

  export default router
  