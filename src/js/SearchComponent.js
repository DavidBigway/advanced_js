Vue.component('search-form', {
  props: ['userSearch'],
  template: /* html */ `
    <form action="#" class="search-form" @submit.prevent="filter">
    <input type="text" class="search-field" v-model="$parent.userSearch" />
    <button class="btn-search" type="submit" @click="filter">
      <i class="fas fa-search"></i>
    </button>
  </form>
    `,
  methods: {
    filter() {
      const regexp = new RegExp(this.$parent.userSearch, 'i')
      const filtered = this.$parent.products.filter((product) =>
        regexp.test(product.product_name)
      )
      this.$parent.filtered = filtered
    },
  },
})
