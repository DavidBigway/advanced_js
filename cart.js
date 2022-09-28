const add = (cart, req) => {
  cart.contents.push(req.body)
  return JSON.stringify(cart, null, 4)
}
const change = (cart, req) => {
  const find = cart.contents.find((item) => item.id_product === +req.params.id)
  find.quantity += req.body.quantity
  return JSON.stringify(cart, null, 4)
}

const remove = (cart, req) => {
  const find = cart.contents.find((item) => item.id_product === +req.params.id)
  if (req.body.quantity === 1) {
    const del = cart.contents.filter(
      (cart) => cart.id_product != find.id_product
    )
    cart.contents = del
  } else {
    find.quantity -= req.body.quantity
  }
  return JSON.stringify(cart, null, 4)
}
const del = (cart, req) => {
  const find = cart.contents.find((item) => item.id_product === +req.params.id)
  const del = cart.contents.filter((cart) => cart.id_product != find.id_product)
  cart.contents = del
  return JSON.stringify(cart, null, 4)
}

module.exports = {
  add,
  change,
  remove,
  del,
}
