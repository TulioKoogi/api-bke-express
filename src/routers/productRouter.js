import express from 'express'
const router = express.Router()

router.post('/',(req, res) => {
    res.json({message: "Rota POST /product"}
    )
  })

  router.get('/',(req, res) => {
    res.json({message: "Rota GET /product"}
    )
  })

  router.delete('/',(req, res) => {
    res.json({message: "Rota DELETE /product"}
    )
  })

  router.put('/',(req, res) => {
    res.json({message: "Rota PUT /product"}
    )
  })

  router.patch('/',(req, res) => {
    res.json({message: "Rota PATCH /product"}
    )
  })

  export default router