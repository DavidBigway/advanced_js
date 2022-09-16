Vue.component('products', {
  props: ['products', 'img'],
  template: /* html */ ` <div class="products">
    <product
            v-bind:id="product.id_product"
            v-for="product of products"
            :img="img"
            :product="product"
    >
    </product>
 </div>`,
  methods: {
    addToCart(e) {
      const id = e.target.dataset.id
      const find = this.$parent.cart.find((product) => product.id_product == id)
      const product = this.$parent.products.filter(
        (product) => product.id_product == id
      )
      if (find) {
        this.$parent.increase(product[0], find)
      } else {
        this.$set(product[0], 'quantity', 1)
        this.$parent.cart.push(product[0])
      }
    },
  },
})

Vue.component('product', {
  props: ['product', 'img'],
  template: /* html */ `
 <div
  class="product-item"
> 
  <img
    :src="product.img"
    :alt="product.product_name"
    v-if="product.img"
  />
  <img :src="img" alt="Some img" v-else />
  <div class="desc">
    <h3>{{product.product_name}}</h3>
    <p>{{product.price}}</p>
    <p>Количество: {{product.quantity ? product.quantity : 0}}</p>
    <button
      class="btn buy-btn"
      v-bind:data-id="product.id_product"
      @click="$parent.addToCart"
    >
      Купить
    </button>
    <button
      class="btn del-btn"
      v-bind:data-id="product.id_product"
      @click="$root.decrease"
    >
      Удалить
    </button>
  </div>
</div>     
  `,
  methods: {},
})
