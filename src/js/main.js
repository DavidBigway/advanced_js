class ProductsList {
  constructor(container = '.products', total = '.total-good-price') {
    this.container = container
    this.total = total
    this.goods = []
    this._fetchProducts()
    this.render()
  }
  _fetchProducts() {
    this.goods = [
      { id: 1, title: 'Notebook', price: '2000', img: 'src/img/1.png' },
      { id: 2, title: 'mouse', price: '150', img: 'src/img/2.png' },
      { id: 3, title: 'keyboard', price: '200', img: 'src/img/3.png' },
      { id: 4, title: 'monitor', price: '1000', img: 'src/img/4.png' },
    ]
  }
  _totalGoodsPrice() {
    let sum = 0
    for (let i = 0; i < this.goods.length; i++) {
      sum += Number(this.goods[i].price)
    }
    return sum
  }
  render() {
    const block = document.querySelector(this.container)
    const total = document.querySelector(this.total)
    for (let product of this.goods) {
      const item = new ProductItem(product)
      block.insertAdjacentHTML('beforeend', item.render())
    }
    total.insertAdjacentHTML('beforeend', this._totalGoodsPrice())
  }
}

class ProductItem {
  constructor(
    product,
    img = 'https://welcome.setantasports.com/wp-content/uploads/2022/03/placeholder.png'
  ) {
    this.id = product.id
    this.title = product.title
    this.price = product.price
    this.img = product.img || img
  }
  render() {
    return `
  <div class="product">
      <img src="${this.img}" alt="${this.title}"/>
      <h2>${this.title}</h2>
      <p>${this.price}</p>
      <button class="add-to-cart__btn">Купить</button>
  </div>
  `
  }
}
let list = new ProductsList()

class Cart {
  constructor(cart = '.cart') {
    this.cart = cart
    this.cartList = []
    this.total = total
    this.render()
  }
  removeCategory() {}
  reset() {}
  order() {}
  render() {
    const cart = document.querySelector(this.cart)
    for (let product of this.cartList) {
      const item = new CartItem(product)
      cart.insertAdjacentHTML('beforeend', item.render())
    }
  }
}
class CartItem {
  constructor(
    product,
    img = 'https://welcome.setantasports.com/wp-content/uploads/2022/03/placeholder.png',
    count = 0,
    total = 0
  ) {
    this.id = product.id
    this.title = product.title
    this.price = product.price
    this.img = product.img || img
    this.count = count
    this.total = total
    this.render()
  }
  increment() {}
  decrement() {}
  render() {}
}

/* 
    return `
    <div class="cart-item">
      <img src="${this.img}" alt="${this.title}"/>
      <div class="cart-item__info">
        <h2>${this.title}</h2>
        <p>${this.price}</p>
      </div>
      <div class="actions"><div class="pin increment" onClick="${this.increment}">+</div>
      <div class="count">${this.count}</div>
      <div class="pin decrement">-</div></div>
      <div class="total">${this.total}</div>
    </div>
    `

*/
