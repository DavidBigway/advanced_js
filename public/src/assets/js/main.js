const header = {
  template: /* html */ `
  <header>
  <div class="header-top container">
    <div class="header-top__left">
      <a href="/" class="logo">
        <img src="src/assets/img/logo.png" alt="brand" />
        <h1 class="logo__text">bran<span>d</span></h1>
      </a>
    <search-form></search-form>
    </div>
    <div class="header-top__right">
     <cart-comp></cart-comp>
      <div class="account pointer">
        <span>My Account</span>
        <div class="dropdow-triangle-white"></div>
      </div>
    </div>
  </div>
</header>
  `,
}

const nav = {
  template: /* html */ `
  <nav>
  <div>
    <ul class="menu">
      <li class="menu-item"><a href="#">Home</a></li>
      <li class="menu-item">
        <a href="#">man</a>
        <div class="mega-box">
          <div class="mega-column">
            <div>
              <h3 class="mega-headding">Man</h3>
              <ul class="mega-menu">
                <li class="mega-item">
                  <a href="#" class="mega-link">Dresses</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Tops</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Jackets/Coats</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Blazers</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Denim</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Leggings/Pants</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Accessories</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mega-column">
            <div>
              <h3 class="mega-headding">Man</h3>
              <ul class="mega-menu">
                <li class="mega-item">
                  <a href="#" class="mega-link">Dresses</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Tops</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Jackets/Coats</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="mega-headding">Man</h3>
              <ul class="mega-menu">
                <li class="mega-item">
                  <a href="#" class="mega-link">Dresses</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Tops</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mega-column">
            <div>
              <h3 class="mega-headding">Man</h3>
              <ul class="mega-menu">
                <li class="mega-item">
                  <a href="#" class="mega-link">Dresses</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Tops</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Jackets/Coats</a>
                </li>
              </ul>
            </div>
            <div class="mega-image">
              <img
                src="src/assets/img/mega-image.png"
                alt="mega-man-image"
              />
            </div>
          </div>
        </div>
      </li>
      <li class="menu-item">
        <a href="#">women</a>
        <div class="mega-box">
          <div class="mega-column">
            <div>
              <h3 class="mega-headding">Women</h3>
              <ul class="mega-menu">
                <li class="mega-item">
                  <a href="#" class="mega-link">Dresses</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Tops</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Jackets/Coats</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Blazers</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Denim</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Leggings/Pants</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Skirts/Shorts</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Accessories</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mega-column">
            <div>
              <h3 class="mega-headding">Women</h3>
              <ul class="mega-menu">
                <li class="mega-item">
                  <a href="#" class="mega-link">Dresses</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Tops</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Jackets/Coats</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="mega-headding">Women</h3>
              <ul class="mega-menu">
                <li class="mega-item">
                  <a href="#" class="mega-link">Dresses</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Tops</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li class="menu-item">
        <a href="#">kids</a>
        <div class="mega-box">
          <div class="mega-column">
            <div>
              <h3 class="mega-headding">Kids</h3>
              <ul class="mega-menu">
                <li class="mega-item">
                  <a href="#" class="mega-link">Dresses</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Tops</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Jackets/Coats</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Blazers</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Accessories</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mega-column">
            <div>
              <h3 class="mega-headding">Kids</h3>
              <ul class="mega-menu">
                <li class="mega-item">
                  <a href="#" class="mega-link">Dresses</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Tops</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Jackets/Coats</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li class="menu-item"><a href="#">Accoseriese</a></li>
      <li class="menu-item last">
        <a href="#">Featured</a>
        <div class="mega-box">
          <div class="mega-column">
            <div>
              <h3 class="mega-headding">Kids</h3>
              <ul class="mega-menu">
                <li class="mega-item">
                  <a href="#" class="mega-link">Dresses</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Tops</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Jackets/Coats</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Blazers</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Accessories</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mega-column">
            <div>
              <h3 class="mega-headding">Kids</h3>
              <ul class="mega-menu">
                <li class="mega-item">
                  <a href="#" class="mega-link">Dresses</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Tops</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Jackets/Coats</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li class="menu-item last">
        <a href="#">Hot Deals</a>
        <div class="mega-box">
          <div class="mega-column">
            <div>
              <h3 class="mega-headding">Kids</h3>
              <ul class="mega-menu">
                <li class="mega-item">
                  <a href="#" class="mega-link">Dresses</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Tops</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Jackets/Coats</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Blazers</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Accessories</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mega-column">
            <div>
              <h3 class="mega-headding">Kids</h3>
              <ul class="mega-menu">
                <li class="mega-item">
                  <a href="#" class="mega-link">Dresses</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Tops</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Sweaters/Knits</a>
                </li>
                <li class="mega-item">
                  <a href="#" class="mega-link">Jackets/Coats</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</nav>
  `,
}

const footer = {
  template: /* html */ `
    <footer class="container">
    <div class="footer-about">
      <a href="/" class="logo">
        <img src="src/assets/img/logo.png" alt="brand" />
        <h1 class="logo__text">bran<span>d</span></h1>
      </a>
      <p>
        Objectively transition extensive data rather than cross functional
        solutions. Monotonectally syndicate multidisciplinary materials before
        go forward benefits. Intrinsicly syndicate an expanded array of
        processes and cross-unit partnerships.
      </p>
      <br />
      <p>
        Efficiently plagiarize 24/365 action items and focused infomed aries.
        Distinctively seize superior initiatives for wireless technologies.
        Dynamically optimize.
      </p>
    </div>
    <div class="footer-nav">
      <div class="footer-nav__column">
        <h4>Company</h4>
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Shop</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>How It Works</li></a>
          <a href="#"><li>Contact</li></a>
        </ul>
      </div>
      <div class="footer-nav__column">
        <h4>Information</h4>
        <ul>
          <a href="#"> <li>Tearms & Condition</li></a>
          <a href="#"> <li>Privacy Policy</li> </a>
          <a href="#"> <li>How to Buy</li> </a>
          <a href="#"> <li>How to Sell</li> </a>
          <a href="#"> <li>Promotion</li> </a>
        </ul>
      </div>
      <div class="footer-nav__column">
        <h4>Shop category</h4>
        <ul>
          <a href="#"> <li>Men</li> </a>
          <a href="#"> <li>Women</li> </a>
          <a href="#"> <li>Child</li> </a>
          <a href="#"> <li>Apparel</li> </a>
          <a href="#"> <li>Brows All</li></a>
        </ul>
      </div>
    </div>
  </footer>
    `,
}

const app = new Vue({
  el: '#app',
  data: {
    cart: [],
    products: [],
    filtered: [],
  },
  components: {
    'header-comp': header,
    'nav-comp': nav,
    'footer-comp': footer,
  },
  methods: {
    getJSON(url) {
      return fetch(url)
        .then((res) => res.json())
        .catch((error) => console.log(error))
    },
    postJSON(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((res) => {
          return res.json()
        })
        .catch((error) => console.log(error))
    },
    putJSON(url, data) {
      return fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .catch((error) => console.log(error))
    },
    deleteJSON(url, data) {
      return fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .catch((error) => console.log(error))
    },

    increase(product) {
      this.putJSON(`/api/cart/${product.id_product}`, { quantity: 1 }).then(
        (data) => {
          if (data.result === 1) {
            product.quantity++
          }
        }
      )
    },
    decrease(product) {
      this.deleteJSON(`/api/cart/${product.id_product}`, { quantity: 1 }).then(
        (data) => {
          if (data.result === 1) {
            product.quantity--
          }
        }
      )
      if (product.quantity === 1) {
        const find = this.$root.cart.find(
          (item) => item.id_product === product.id_product
        )
        const del = this.$root.cart.filter(
          (cart) => cart.id_product != find.id_product
        )
        this.$root.cart = del
      }
    },
    removeProduct(product) {
      this.deleteJSON(`/api/cart/${product.id_product}`, {
        quantity: product.quantity,
      }).then((data) => {
        if (data.result === 1) {
          const filteredCart = this.$root.cart.filter(
            (item) => item.id_product != product.id_product
          )
          product.quantity = 0
          this.$root.cart = filteredCart
        }
      })
    },
  },
})
