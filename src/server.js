import express from 'express'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import { PORT, HOST, ENVIRONMENT } from './config.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {res.json({message: "Bem vindo a API"})})
app.use('/user', userRouter)
app.use('/product', productRouter)

app.listen(PORT, () => {
  console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em  ${ENVIRONMENT == 'production' ? HOST : HOST+ ':'+ PORT}`)
})


