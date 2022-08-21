const API =
  'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
const cartPopup = document.querySelector('.cart')
cartPopup.addEventListener('click', () => {
  document.querySelector('.cart-popup').classList.toggle('active')
})
class ProductsList {
  constructor(container = '.products', total = '.total-good-price') {
    this.container = container
    this.total = total
    this.goods = []
    this._fetchProducts().then((data) => {
      this.goods = data
      this.render()
    })
  }
  _fetchProducts() {
    return fetch(`${API}/catalogData.json`)
      .then((res) => res.json())
      .catch((error) => console.log(error))
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
    this.id = product.id_product
    this.title = product.product_name
    this.price = product.price
    this.img = product.img || img
  }
  render() {
    return `
  <div data-id="${this.id}" class="product">
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
  constructor(cart = '.cart-popup', count = '.count', total = 0) {
    this.cart = cart
    this.cartList = []
    this.count = count
    this.total = total
    this._fetchCart().then((data) => {
      this.cartList = data
      this.render()
    })
  }
  // не понял, как их добавить в рендер, чтобы при клике запускался метод
  // increment() {}
  // decrement() {}
  // removeCategory() {}
  // clear() {}
  // order() {}
  _fetchCart() {
    return fetch(`${API}/getBasket.json`)
      .then((res) => res.json())
      .catch((error) => console.log(error))
  }
  render() {
    const cart = document.querySelector(this.cart)
    for (let product of this.cartList.contents) {
      const item = new CartItem(product)
      cart.insertAdjacentHTML('beforeend', item.render())
    }
  }
}
class CartItem {
  constructor(
    product,
    img = 'https://welcome.setantasports.com/wp-content/uploads/2022/03/placeholder.png'
  ) {
    this.id = product.id_product
    this.title = product.product_name
    this.price = product.price
    this.img = product.img || img
    this.count = product.quantity || 0
    this.total = product.quantity * product.price || 0
    this.render()
  }
  render() {
    return `
    <div data-id="${this.id}" class="cart-item">
      <img src="${this.img}" alt="${this.title}"/>
      <div class="cart-item__info">
        <h2>${this.title}</h2>
        <p>${this.price}</p>
      </div>
      <div class="actions"><div class="pin increment">+</div>
      <div class="count">${this.count}</div>
      <div class="pin decrement">-</div></div>
      <div class="total">${this.total}</div>
      <div class="remove-category">Х</div>
    </div>
    `
  }
}
let cart = new Cart()
