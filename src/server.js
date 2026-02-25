//const express = require('express')
import express from 'express'
const app = express()
const port = 1500

app.get('/', (req, res) => {
  res.send('Ola Mundo express API!')
})

app.get('/user', (req, res) => {
  res.send('exemplo de get na rota user!')
})

app.post('/user', (req, res) => {
  res.send('exemplo de post na rota user!')
})

app.put('/user', (req, res) => {
  res.send('exemplo de put na rota user!')
})

app.patch('/user', (req, res) => {
  res.send('exemplo de patch na rota user!')
})

app.delete('/user', (req, res) => {
  res.send('exemplo de delete na rota user!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
