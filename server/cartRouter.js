const express = require('express')
const fs = require('fs')
const router = express.Router()
const handler = require('./../handler')

router.get('/', (req, res) => {
  fs.readFile('./getCart.json', 'utf-8', (error, data) => {
    if (error) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: error }))
    } else {
      res.send(data)
    }
  })
})
router.post('/', (req, res) => {
  handler(req, res, 'add', './getCart.json')
})
router.put('/:id', (req, res) => {
  handler(req, res, 'change', './getCart.json')
})
router.delete('/:id', (req, res) => {
  req.body.quantity === 1
    ? handler(req, res, 'remove', './getCart.json')
    : handler(req, res, 'del', './getCart.json')
})

module.exports = router
