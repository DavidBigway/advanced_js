const express = require('express')
const fs = require('fs')
const app = express()
const cart = require('./cartRouter')

app.use('/', express.static('../public'))
app.use(express.json())
app.use('/api/cart', cart)

app.get('/api/products', (req, res) => {
  fs.readFile('getProducts.json', 'utf-8', (error, data) => {
    if (error) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: error }))
    } else {
      res.send(data)
    }
  })
})

app.get('/api/cart/:id', (req, res) => {
  fs.readFile('getCart.json', 'utf-8', (error, data) => {
    if (error) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: error }))
    } else {
      res.send(data)
    }
  })
})

app.listen(3000, () => {})
