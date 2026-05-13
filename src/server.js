//const express = require('express')
import express from 'express'
import userRouter from './routers/userRouter.js'
import publicationRouter from './routers/publicationRouter.js'
import { logger } from './middlewares/logger.js'
import { errorHandler } from './middlewares/errorHandler.js'
import { error404 } from './middlewares/error404.js'

const app = express()
const port = 3400


app.use(logger)
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Ola Mundo express API!')
})



app.use('/pub', publicationRouter)
app.use('/user', userRouter)

app.use(error404)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Servidor rondando em http://localhost:${port}`)
}) 
