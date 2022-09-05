const API_URL =
  'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

const app = new Vue({
  el: '#app',
  data: {
    name: 'E-shop',
    defaultImg:
      'https://mosaicfest.ru/wp-content/uploads/2021/04/placeholder.png',
    catalogDataUrl: '/catalogData.json',
    cartDataUrl: '/getBasket.json',
    products: [],
    filtered: [],
    cart: [],
    userSearch: '',
    cartShow: false,
  },
  methods: {
    load() {
      this.filtered = this.products
    },
    addToCart(e) {
      const id = e.target.dataset.id
      const find = this.cart.find((product) => product.id_product == id)
      const product = this.products.filter(
        (product) => product.id_product == id
      )
      if (find) {
        this.increase(product[0], find)
      } else {
        this.$set(product[0], 'quantity', 1)
        this.cart.push(product[0])
      }
    },
    increase(product, cartProduct) {
      product.quantity++
      cartProduct.quantity = product.quantity
    },
    decrease(e) {
      const id = e.target.dataset.id
      const product = this.products.filter(
        (product) => product.id_product == id
      )
      if (product[0].quantity < 1) {
        product.quantity = 0
      } else {
        product[0].quantity--
      }
    },
    removeProduct(e) {
      const id = e.target.dataset.id
      const filteredCart = this.cart.filter(
        (product) => product.id_product != id
      )
      const findedProduct = this.products.find(
        (product) => product.id_product == id
      )
      findedProduct.quantity = 0
      this.cart = filteredCart
      if (this.cart.length === 0) {
        this.show()
      }
    },
    filter() {
      const regexp = new RegExp(this.userSearch, 'i')
      const filtered = this.products.filter((product) =>
        regexp.test(product.product_name)
      )
      this.filtered = filtered
    },
    getJSON(url) {
      return fetch(url)
        .then((res) => res.json())
        .catch((err) => console.log(err))
    },
    show() {
      this.cartShow = !this.cartShow
      document.querySelector('.cart-block').classList.toggle('invisible')
    },
  },
  mounted() {
    this.getJSON(`${API_URL + this.catalogDataUrl}`).then((data) => {
      for (let product of data) {
        this.$set(product, 'img', `../src/img/${product.id_product}.png`)
        this.products.push(product)
      }
    })
    this.getJSON('../getProducts.json').then((data) => {
      for (let product of data) {
        // можно проверку на файлы сделать, мол если есть такой файл, тогда
        this.$set(product, 'img', `../src/img/${product.id_product}.png`)
        // если файлв с таким id (product.id_product.png) нет, то вставлять this.defaultImg
        this.products.push(product)
      }
    })
    this.getJSON(`${API_URL + this.cartDataUrl}`).then((data) => {
      data.contents.forEach((product) => {
        this.cart.push(product)
        const findedProduct = this.products.find(
          (item) => item.id_product == product.id_product
        )
        this.$set(findedProduct, 'img', `../src/img/${product.id_product}.png`)
        this.$set(findedProduct, 'quantity', product.quantity)
      })
    })
    this.load()
  },
})

/* class List {
  constructor(url, container, list = list2) {
    this.container = container
    this.list = list
    this.url = url
    this.goods = []
    this.allProducts = []
    this.filtered = []
    this._init()
  }
  getJson(url) {
    return fetch(url ? url : `${API + this.url}`)
      .then((result) => result.json())
      .catch((error) => {
        console.log(error)
      })
  }
  handleData(data) {
    this.goods = [...data]
    this.render()
  }
  calcSum() {
    return this.allProducts.reduce((accum, item) => (accum += item.price), 0)
  }
  render() {
    const block = document.querySelector(this.container)
    for (let product of this.goods) {
      const productObj = new this.list[this.constructor.name](product)
      console.log(productObj)
      this.allProducts.push(productObj)
      block.insertAdjacentHTML('beforeend', productObj.render())
    }
  }
  filter(value) {
    const regexp = new RegExp(value, 'i')
    this.filtered = this.allProducts.filter((product) =>
      regexp.test(product.product_name)
    )
    this.allProducts.forEach((el) => {
      const block = document.querySelector(
        `.product-item[data-id="${el.id_product}"]`
      )
      if (!this.filtered.includes(el)) {
        block.classList.add('invisible')
      } else {
        block.classList.remove('invisible')
      }
    })
  }
  _init() {
    return false
  }
}

class Item {
  constructor(el, img = 'https://placehold.it/200x150') {
    this.product_name = el.product_name
    this.price = el.price
    this.id_product = el.id_product
    this.img = img
  }
  render() {
    return `<div class="product-item" data-id="${this.id_product}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.product_name}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn"
                    data-id="${this.id_product}"
                    data-name="${this.product_name}"
                    data-price="${this.price}">Купить</button>
                </div>
            </div>`
  }
}

class ProductsList extends List {
  constructor(cart, container = '.products', url = '/catalogData.json') {
    super(url, container)
    this.cart = cart
    this.getJson().then((data) => this.handleData(data))
  }
  _init() {
    document.querySelector(this.container).addEventListener('click', (e) => {
      if (e.target.classList.contains('buy-btn')) {
        this.cart.addProduct(e.target)
      }
    })
    document.querySelector('.search-form').addEventListener('submit', (e) => {
      e.preventDefault()
      this.filter(document.querySelector('.search-field').value)
    })
  }
}

class ProductItem extends Item {}

class Cart extends List {
  constructor(container = '.cart-block', url = '/getBasket.json') {
    super(url, container)
    this.getJson().then((data) => {
      this.handleData(data.contents)
    })
  }
  addProduct(element) {
    this.getJson(`${API}/addToBasket.json`).then((data) => {
      if (data.result === 1) {
        let productId = +element.dataset['id']
        let find = this.allProducts.find(
          (product) => product.id_product === productId
        )
        if (find) {
          find.quantity++
          this._updateCart(find)
        } else {
          let product = {
            id_product: productId,
            price: +element.dataset['price'],
            product_name: element.dataset['name'],
            quantity: 1,
          }
          this.goods = [product]
          this.render()
        }
      } else {
        alert('Error')
      }
    })
  }
  removeProduct(element) {
    this.getJson(`${API}/deleteFromBasket.json`).then((data) => {
      if (data.result === 1) {
        let productId = +element.dataset['id']
        let find = this.allProducts.find(
          (product) => product.id_product === productId
        )
        if (find.quantity > 1) {
          find.quantity--
          this._updateCart(find)
        } else {
          this.allProducts.splice(this.allProducts.indexOf(find), 1)
          document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
        }
      } else {
        alert('Error')
      }
    })
  }
  _updateCart(product) {
    let block = document.querySelector(
      `.cart-item[data-id="${product.id_product}"]`
    )
    block.querySelector(
      '.product-quantity'
    ).textContent = `Quantity: ${product.quantity}`
    block.querySelector('.product-price').textContent = `$${
      product.quantity * product.price
    }`
  }
  _init() {
    document.querySelector('.btn-cart').addEventListener('click', () => {
      document.querySelector(this.container).classList.toggle('invisible')
    })
    document.querySelector(this.container).addEventListener('click', (e) => {
      if (e.target.classList.contains('del-btn')) {
        this.removeProduct(e.target)
      }
    })
  }
}

class CartItem extends Item {
  constructor(el, img = 'https://placehold.it/50x100') {
    super(el, img)
    this.quantity = el.quantity
  }
  render() {
    return `<div class="cart-item" data-id="${this.id_product}">
            <div class="product-bio">
            <img src="${this.img}" alt="Some image">
            <div class="product-desc">
            <p class="product-title">${this.product_name}</p>
            <p class="product-quantity">Quantity: ${this.quantity}</p>
        <p class="product-single-price">$${this.price} each</p>
        </div>
        </div>
        <div class="right-block">
            <p class="product-price">$${this.quantity * this.price}</p>
            <button class="del-btn" data-id="${
              this.id_product
            }">&times;</button>
        </div>
        </div>`
  }
}
const list2 = {
  ProductsList: ProductItem,
  Cart: CartItem,
}

let cart = new Cart()
let products = new ProductsList(cart)
products.getJson(`getProducts.json`).then((data) => products.handleData(data))

 */
