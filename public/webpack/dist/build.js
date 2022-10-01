(()=>{var a={902:()=>{Vue.component("cart-comp",{data:()=>({cartShow:!1}),template:'\n    <div class="cart pointer">\n    <img src="src/assets/img/cart.png" alt="cart" @click=\'show\'/>\n    <div class="cart-box" v-show=\'this.cartShow\' v-if="this.$root.cart.length > 0">\n   <cart-item \n        v-bind:data-id="item.id_product"\n        v-for="item in this.$root.cart"\n        :item="item"\n        :key="item.id_product"\n      ></cart-item>\n    </div>\n    <div class="cart-box" style="text-align: center; padding: 60px 0" v-show=\'this.cartShow\' v-else>\n    Ваша карзина пуста :(\n    </div>\n  </div>\n    ',methods:{show(){this.cartShow=!this.cartShow}},mounted(){this.$root.getJSON("/api/cart").then((a=>{this.$root.cart=a.contents}))}}),Vue.component("cart-item",{props:["item"],template:'\n  <div class="cart-item">\n  <div class="product-bio">\n    <img :src="item.product_img" alt="Some img" />\n    <div class="product-desc">\n      <p class="product-title">{{item.product_name}}</p>\n      <p class="product-single-price">{{item.currency}}{{item.price}}</p>\n    </div>\n    <div class="product-count">\n    <button @click="$root.decrease(item)" > - </button>\n    <p class="product-quantity">{{ item.quantity}}</p>\n    <button @click="$root.increase(item)" > + </button></div>\n  </div>\n  <div class="right-block">\n    <p class="product-price">Всего: {{item.currency}}{{item.quantity * item.price}}</p>\n    <button @click="$root.removeProduct(item)" >&times;</button>\n  </div>\n</div>\n  '})},534:()=>{Vue.component("products-cards",{template:'\n  <div class="products-cards">\n        <product-card  v-bind:id="product.id_product" :product="product" v-for="product in this.$root.filtered" :key="product.id_product"></product-card> \n  </div>\n    ',methods:{load(){this.$root.filtered=this.$root.products}},mounted(){this.$root.getJSON("/api/products").then((a=>{this.$root.products=a,this.load()}))}}),Vue.component("product-card",{props:["product"],template:'\n    <div class="product-card">\n    <div class="product-card__image">\n      <div class="product-card__image__add-to-cart">\n        <button @click="addToCart(product)" >\n          <div class="cart-icon" ></div>\n          Add to Cart\n        </button>\n      </div>\n      <img :src="product.product_img" :alt="product.product_name" />\n    </div>\n    <div class="product-card__info">\n      <h5>{{product.product_name}}</h5>\n      <p >{{product.currency}}{{product.price}}</p>\n    </div>\n  </div>\n    ',methods:{addToCart(a){const n=this.$root.cart.find((n=>n.id_product==a.id_product));if(n)this.$root.putJSON(`/api/cart/${n.id_product}`,{quantity:1}).then((a=>{1===a.result&&n.quantity++}));else{const n=Object.assign({quantity:1},a);this.$root.postJSON("/api/cart",n).then((a=>{1===a?.result&&this.$root.cart.push(n)}))}}}})},564:()=>{Vue.component("search-form",{data:()=>({userSearch:""}),template:'\n      <form action="#" class="search" @submit.prevent="filter">\n      <div class="search-browse pointer">\n        <span class="search-browse__text">Browse</span>\n      <div class="dropdow-triangle"></div>\n        </div>\n      <input type="text" placeholder="Search for item..." v-model="userSearch" />\n      <button class="search-btn pointer" type="submit" @click="filter">\n        <i class="fas fa-search"></i>\n      </button>\n    </form>\n      ',methods:{filter(){const a=new RegExp(this.userSearch,"i"),n=this.$root.products.filter((n=>a.test(n.product_name)));this.$root.filtered=n}}})},833:()=>{new Vue({el:"#app",data:{cart:[],products:[],filtered:[]},components:{"header-comp":{template:'\n  <header>\n  <div class="header-top container">\n    <div class="header-top__left">\n      <a href="/" class="logo">\n        <img src="src/assets/img/logo.png" alt="brand" />\n        <h1 class="logo__text">bran<span>d</span></h1>\n      </a>\n    <search-form></search-form>\n    </div>\n    <div class="header-top__right">\n     <cart-comp></cart-comp>\n      <div class="account pointer">\n        <span>My Account</span>\n        <div class="dropdow-triangle-white"></div>\n      </div>\n    </div>\n  </div>\n</header>\n  '},"nav-comp":{template:'\n  <nav>\n  <div>\n    <ul class="menu">\n      <li class="menu-item"><a href="#">Home</a></li>\n      <li class="menu-item">\n        <a href="#">man</a>\n        <div class="mega-box">\n          <div class="mega-column">\n            <div>\n              <h3 class="mega-headding">Man</h3>\n              <ul class="mega-menu">\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Dresses</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Tops</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Sweaters/Knits</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Jackets/Coats</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Blazers</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Denim</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Leggings/Pants</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Skirts/Shorts</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Accessories</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class="mega-column">\n            <div>\n              <h3 class="mega-headding">Man</h3>\n              <ul class="mega-menu">\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Dresses</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Tops</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Sweaters/Knits</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Jackets/Coats</a>\n                </li>\n              </ul>\n            </div>\n            <div>\n              <h3 class="mega-headding">Man</h3>\n              <ul class="mega-menu">\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Dresses</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Tops</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Sweaters/Knits</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class="mega-column">\n            <div>\n              <h3 class="mega-headding">Man</h3>\n              <ul class="mega-menu">\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Dresses</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Tops</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Sweaters/Knits</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Jackets/Coats</a>\n                </li>\n              </ul>\n            </div>\n            <div class="mega-image">\n              <img\n                src="src/assets/img/mega-image.png"\n                alt="mega-man-image"\n              />\n            </div>\n          </div>\n        </div>\n      </li>\n      <li class="menu-item">\n        <a href="#">women</a>\n        <div class="mega-box">\n          <div class="mega-column">\n            <div>\n              <h3 class="mega-headding">Women</h3>\n              <ul class="mega-menu">\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Dresses</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Tops</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Sweaters/Knits</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Jackets/Coats</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Blazers</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Denim</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Leggings/Pants</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Skirts/Shorts</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Accessories</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class="mega-column">\n            <div>\n              <h3 class="mega-headding">Women</h3>\n              <ul class="mega-menu">\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Dresses</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Tops</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Sweaters/Knits</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Jackets/Coats</a>\n                </li>\n              </ul>\n            </div>\n            <div>\n              <h3 class="mega-headding">Women</h3>\n              <ul class="mega-menu">\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Dresses</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Tops</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Sweaters/Knits</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </li>\n      <li class="menu-item">\n        <a href="#">kids</a>\n        <div class="mega-box">\n          <div class="mega-column">\n            <div>\n              <h3 class="mega-headding">Kids</h3>\n              <ul class="mega-menu">\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Dresses</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Tops</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Sweaters/Knits</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Jackets/Coats</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Blazers</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Accessories</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class="mega-column">\n            <div>\n              <h3 class="mega-headding">Kids</h3>\n              <ul class="mega-menu">\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Dresses</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Tops</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Sweaters/Knits</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Jackets/Coats</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </li>\n      <li class="menu-item"><a href="#">Accoseriese</a></li>\n      <li class="menu-item last">\n        <a href="#">Featured</a>\n        <div class="mega-box">\n          <div class="mega-column">\n            <div>\n              <h3 class="mega-headding">Kids</h3>\n              <ul class="mega-menu">\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Dresses</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Tops</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Sweaters/Knits</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Jackets/Coats</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Blazers</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Accessories</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class="mega-column">\n            <div>\n              <h3 class="mega-headding">Kids</h3>\n              <ul class="mega-menu">\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Dresses</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Tops</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Sweaters/Knits</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Jackets/Coats</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </li>\n      <li class="menu-item last">\n        <a href="#">Hot Deals</a>\n        <div class="mega-box">\n          <div class="mega-column">\n            <div>\n              <h3 class="mega-headding">Kids</h3>\n              <ul class="mega-menu">\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Dresses</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Tops</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Sweaters/Knits</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Jackets/Coats</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Blazers</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Accessories</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class="mega-column">\n            <div>\n              <h3 class="mega-headding">Kids</h3>\n              <ul class="mega-menu">\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Dresses</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Tops</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Sweaters/Knits</a>\n                </li>\n                <li class="mega-item">\n                  <a href="#" class="mega-link">Jackets/Coats</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n  '},"footer-comp":{template:'\n    <footer class="container">\n    <div class="footer-about">\n      <a href="/" class="logo">\n        <img src="src/assets/img/logo.png" alt="brand" />\n        <h1 class="logo__text">bran<span>d</span></h1>\n      </a>\n      <p>\n        Objectively transition extensive data rather than cross functional\n        solutions. Monotonectally syndicate multidisciplinary materials before\n        go forward benefits. Intrinsicly syndicate an expanded array of\n        processes and cross-unit partnerships.\n      </p>\n      <br />\n      <p>\n        Efficiently plagiarize 24/365 action items and focused infomed aries.\n        Distinctively seize superior initiatives for wireless technologies.\n        Dynamically optimize.\n      </p>\n    </div>\n    <div class="footer-nav">\n      <div class="footer-nav__column">\n        <h4>Company</h4>\n        <ul>\n          <a href="#"><li>Home</li></a>\n          <a href="#"><li>Shop</li></a>\n          <a href="#"><li>About</li></a>\n          <a href="#"><li>How It Works</li></a>\n          <a href="#"><li>Contact</li></a>\n        </ul>\n      </div>\n      <div class="footer-nav__column">\n        <h4>Information</h4>\n        <ul>\n          <a href="#"> <li>Tearms & Condition</li></a>\n          <a href="#"> <li>Privacy Policy</li> </a>\n          <a href="#"> <li>How to Buy</li> </a>\n          <a href="#"> <li>How to Sell</li> </a>\n          <a href="#"> <li>Promotion</li> </a>\n        </ul>\n      </div>\n      <div class="footer-nav__column">\n        <h4>Shop category</h4>\n        <ul>\n          <a href="#"> <li>Men</li> </a>\n          <a href="#"> <li>Women</li> </a>\n          <a href="#"> <li>Child</li> </a>\n          <a href="#"> <li>Apparel</li> </a>\n          <a href="#"> <li>Brows All</li></a>\n        </ul>\n      </div>\n    </div>\n  </footer>\n    '}},methods:{getJSON:a=>fetch(a).then((a=>a.json())).catch((a=>console.log(a))),postJSON:(a,n)=>fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((a=>a.json())).catch((a=>console.log(a))),putJSON:(a,n)=>fetch(a,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((a=>a.json())).catch((a=>console.log(a))),deleteJSON:(a,n)=>fetch(a,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((a=>a.json())).catch((a=>console.log(a))),increase(a){this.putJSON(`/api/cart/${a.id_product}`,{quantity:1}).then((n=>{1===n.result&&a.quantity++}))},decrease(a){if(this.deleteJSON(`/api/cart/${a.id_product}`,{quantity:1}).then((n=>{1===n.result&&a.quantity--})),1===a.quantity){const n=this.$root.cart.find((n=>n.id_product===a.id_product)),s=this.$root.cart.filter((a=>a.id_product!=n.id_product));this.$root.cart=s}},removeProduct(a){this.deleteJSON(`/api/cart/${a.id_product}`,{quantity:a.quantity}).then((n=>{if(1===n.result){const n=this.$root.cart.filter((n=>n.id_product!=a.id_product));a.quantity=0,this.$root.cart=n}}))}}})}},n={};function s(e){var i=n[e];if(void 0!==i)return i.exports;var l=n[e]={exports:{}};return a[e](l,l.exports,s),l.exports}s(902),s(534),s(564),s(833)})();