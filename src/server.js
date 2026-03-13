//const express = require('express')
import express from 'express'
import userRouter from './routers/userRouter.js'
import postRouter from './routers/postRouter.js'

const app = express()
const port = 3400

app.get('/', (req, res) => {
  res.send('Ola Mundo express API!')
})

app.use('/post', postRouter)
app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`Servidor rondando em http://localhost:${port}`)
}) 
