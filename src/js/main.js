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
    error: true, // truw
  },
  methods: {
    load() {
      this.filtered = this.products
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
    getJSON(url) {
      return fetch(url)
        .then((res) => res.json())
        .catch((err) => {
          console.log(err)
          this.error = true
        })
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
        this.$set(product, 'img', `../src/img/${product.id_product}.png`)
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
