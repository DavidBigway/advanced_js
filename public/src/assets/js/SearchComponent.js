Vue.component('search-form', {
  data() {
    return {
      userSearch: '',
    }
  },
  template: /* html */ `
      <form action="#" class="search" @submit.prevent="filter">
      <div class="search-browse pointer">
        <span class="search-browse__text">Browse</span>
      <div class="dropdow-triangle"></div>
        </div>
      <input type="text" placeholder="Search for item..." v-model="userSearch" />
      <button class="search-btn pointer" type="submit" @click="filter">
        <i class="fas fa-search"></i>
      </button>
    </form>
      `,
  methods: {
    filter() {
      const regexp = new RegExp(this.userSearch, 'i')
      const filtered = this.$root.products.filter((product) =>
        regexp.test(product.product_name)
      )
      this.$root.filtered = filtered
    },
  },
})
