Vue.component('cart-block', {
  props: ['cart'],
  template: /* html */ `
<div class="cart-block invisible">
  <cart-product 
    class="cart-item"
    v-bind:data-id="product.id_product"
    v-for="product of this.$parent.cart"
    :product="product">
    </cart-product>
</div>
`,
})

Vue.component('cart-product', {
  props: ['product'],
  template: /* html */ `
<div>
    <div class="product-bio">
        <img
        :src="product.img"
        :alt="product.product_name"
        v-if="product.img"
        />
        <img :src="$root.defaultImg" alt="Some img" v-else />
        <div class="product-desc">
            <p class="product-title">{{product.product_name}}</p>
            <p class="product-quantity">{{product.quantity}}</p>
            <p class="product-single-price">{{product.price}} цена</p>
        </div>
    </div>
    <div class="right-block">
        <p class="product-price">
        Всего {{ product.price * product.quantity }}
        </p>
        <button
        class="del-btn"
        v-bind:data-id="product.id_product"
        @click="$root.removeProduct"
        >
        &times;
        </button>
    </div>
</div>
`,
})
