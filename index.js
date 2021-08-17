const PORT = 4000
const express = require('express');
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/", (req, res, next) => {
  const { body, headers } = req
  body.api = 'post realizado com sucesso'
  console.log('Api chamada por')
  console.log(headers, body)
  res.json(body)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})