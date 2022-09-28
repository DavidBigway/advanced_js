const cart = require('./cart')
const fs = require('fs')

const actions = {
  add: cart.add,
  change: cart.change,
  remove: cart.remove,
  del: cart.del,
}

const handler = (req, res, action, file) => {
  fs.readFile(file, 'utf-8', (error, data) => {
    if (error) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: error }))
    } else {
      const newCart = actions[action](JSON.parse(data), req)
      fs.writeFile(file, newCart, (error) => {
        if (error) {
          res.sendStatus(404, JSON.stringify({ result: 0, text: error }))
        } else {
          res.send(JSON.stringify({ result: 1 }))
        }
      })
    }
  })
}

module.exports = handler
