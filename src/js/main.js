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
