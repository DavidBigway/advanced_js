<<<<<<< HEAD
const API =
  'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

// let getRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         // window.ActiveXObject -> xhr = new ActiveXObject()
//         xhr.open("GET", url, true);
//         xhr.onreadystatechange = () => {
//             if(xhr.readyState === 4){
//                 if(xhr.status !== 200){
//                     reject('Error');
//                 } else {
//                     resolve(xhr.responseText);
//                 }
//             }
//         };
//         xhr.send();
//     })
// };
//
// getRequest('tel.json').then(data => {
//
// })

class List {
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

const quotesText = `One: 'Hi Mary.'
Two: 'Oh, hi.'
One: 'How are you doing?'
Two: 'I'm doing alright. How about you?'
One: 'Not too bad. The weather is great isn't it?'
Two: 'Yes. It's absolutely beautiful today.'
One: 'I wish it was like this more frequently.'
Two: 'Me too.'
One: 'So where are you going now?'
Two: 'I'm going to meet a friend of mine at the department store.'
One: 'Going to do a little shopping?'
Two: 'Yeah, I have to buy some presents for my parents.'
One: 'What's the occasion?'
Two: 'It's their anniversary.'
One: 'That's great. Well, you better get going. You don't want to be late.'
Two: 'I'll see you next time.'
One: 'Sure. Bye.'`

const re = /\n/gm
const q = quotesText.replace(re, '<br/>')

const quotesTextEl = document.querySelector('.quotes-text')
const allQuotesEl = document.querySelectorAll('button')
quotesTextEl.insertAdjacentHTML('beforeend', q)
const allQuotes = (e) => {
  quotesTextEl.innerHTML = ''
  const datasetId = e.target.dataset.id
  if (datasetId === 'reset') {
    quotesTextEl.insertAdjacentHTML('beforeend', q)
  }
  if (datasetId === 'all-quotes') {
    const s = q.replace(/'/gm, `"`)
    quotesTextEl.insertAdjacentHTML('beforeend', s)
  }
  if (datasetId === 'none-apostrophe') {
    const s = q.replace(/[ ]+\'|[']+\n/gm, `"`)
    quotesTextEl.insertAdjacentHTML('beforeend', s)
  }
}

allQuotesEl.forEach((elem) => elem.addEventListener('click', allQuotes))
=======
const products = [
  { id: 1, title: 'Notebook', price: '2000', img: 'src/img/1.png' },
  { id: 2, title: 'mouse', price: '150', img: 'src/img/2.png' },
  { id: 3, title: 'keyboard', price: '200', img: 'src/img/3.png' },
  { id: 4, title: 'monitor', price: '1000', img: 'src/img/4.png' },
]

const renderProduct = (product) => {
  const { title, price, img } = product
  return `
    <div class="product">
        <img src="${img}"/>
        <h2>${title}</h2>
        <p>${price}</p>
        <button>Купить</button>
    </div>
    `
}
const renderPage = (products) => {
  const productsList = products.map((product) => renderProduct(product))
  // появились из-за того, что мы записываем массив в виде строки ["div", "div", "div"] => "div", "div", "div"
  // поэтому он заполняет наш элемент с запятыми. Join возвращает новую строку с символом, который мы укажем, тут ""
  document.querySelector('.products').innerHTML = productsList.join('')
}
renderPage(products)
>>>>>>> ad85036e2e714dfaa94dc1246582fa158a7506c1
