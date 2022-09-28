Vue.component('products-cards', {
  template: /* html */ `
  <div class="products-cards">
        <product-card  v-bind:id="product.id_product" :product="product" v-for="product in this.$root.filtered" :key="product.id_product"></product-card> 
  </div>
    `,
  methods: {
    load() {
      this.$root.filtered = this.$root.products
    },
  },
  mounted() {
    this.$root.getJSON('/api/products').then((data) => {
      this.$root.products = data
      this.load()
    })
  },
})

Vue.component('product-card', {
  props: ['product'],
  template: /* html */ `
    <div class="product-card">
    <div class="product-card__image">
      <div class="product-card__image__add-to-cart">
        <button @click="addToCart(product)" >
          <div class="cart-icon" ></div>
          Add to Cart
        </button>
      </div>
      <img :src="product.product_img" :alt="product.product_name" />
    </div>
    <div class="product-card__info">
      <h5>{{product.product_name}}</h5>
      <p >{{product.currency}}{{product.price}}</p>
    </div>
  </div>
    `,
  methods: {
    addToCart(e) {
      const find = this.$root.cart.find(
        (product) => product.id_product == e.id_product
      )
      if (find) {
        this.$root
          .putJSON(`/api/cart/${find.id_product}`, { quantity: 1 })
          .then((data) => {
            if (data.result === 1) {
              find.quantity++
            }
          })
      } else {
        const product = Object.assign({ quantity: 1 }, e)
        this.$root.postJSON(`/api/cart`, product).then((data) => {
          if (data?.result === 1) {
            this.$root.cart.push(product)
          }
        })
      }
    },
  },
})
