import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!, tudo bem ?')
})

app.get('/user',(req, res) => {
    res.json({nome:"tulio", 
    email: "tulio@email.com", 
    profissao: "estudante"}
    )
})
app.listen(port, () => {
  console.log(`Executando na porta ${port}`)
})


