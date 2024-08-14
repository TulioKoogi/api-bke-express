import express from 'express'
import createProduct from "../controllers/controllerProduct/createProduct.js"
import deleteProduct from "../controllers/controllerProduct/deleteProduct.js"
import editNameProduct from "../controllers/controllerProduct/editNameProduct.js"
import editProduct from "../controllers/controllerProduct/editProduct.js"
import productById from "../controllers/controllerProduct/productById.js"
import productList from "../controllers/controllerProduct/productList.js"

const router = express.Router()
  router.get('/', productById)
  router.get('/listProduct', productList)
  router.post('/', createProduct)
  router.put('/', editProduct)
  router.patch('/', editNameProduct)
  router.delete('/', deleteProduct)

  export default router