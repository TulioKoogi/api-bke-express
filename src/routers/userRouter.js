import express from 'express'
import userList from '../controllers/userList.js'
import userById from '../controllers/userById.js'
import editUser from '../controllers/editUser.js'
import createUser from '../controllers/createUser.js'
import editNameUser from '../controllers/editNameUser.js'
import deleteUser from '../controllers/deleteUser.js'


const router = express.Router()

  router.get('/', userById)
  router.get('/list', userList)
  router.post('/', createUser)
  router.put('/', editUser)
  router.patch('/', editNameUser)
  router.delete('/', deleteUser)


  
  export default router
  