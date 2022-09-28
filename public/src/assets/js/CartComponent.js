Vue.component('cart-comp', {
  data() {
    return { cartShow: false }
  },
  template: /* html */ `
    <div class="cart pointer">
    <img src="src/assets/img/cart.png" alt="cart" @click='show'/>
    <div class="cart-box" v-show='this.cartShow' v-if="this.$root.cart.length > 0">
   <cart-item 
        v-bind:data-id="item.id_product"
        v-for="item in this.$root.cart"
        :item="item"
        :key="item.id_product"
      ></cart-item>
    </div>
    <div class="cart-box" style="text-align: center; padding: 60px 0" v-show='this.cartShow' v-else>
    Ваша карзина пуста :(
    </div>
  </div>
    `,
  methods: {
    show() {
      this.cartShow = !this.cartShow
    },
  },
  mounted() {
    this.$root.getJSON('/api/cart').then((data) => {
      this.$root.cart = data.contents
    })
  },
})

Vue.component('cart-item', {
  props: ['item'],
  template: /* html */ `
  <div class="cart-item">
  <div class="product-bio">
    <img :src="item.product_img" alt="Some img" />
    <div class="product-desc">
      <p class="product-title">{{item.product_name}}</p>
      <p class="product-single-price">{{item.currency}}{{item.price}}</p>
    </div>
    <div class="product-count">
    <button @click="$root.decrease(item)" > - </button>
    <p class="product-quantity">{{ item.quantity}}</p>
    <button @click="$root.increase(item)" > + </button></div>
  </div>
  <div class="right-block">
    <p class="product-price">Всего: {{item.currency}}{{item.quantity * item.price}}</p>
    <button @click="$root.removeProduct(item)" >&times;</button>
  </div>
</div>
  `,
})
