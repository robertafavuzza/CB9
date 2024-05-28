import './App.css'
import { useState, useEffect } from 'react'
import NavigationLink from './components/NavigationLink/NavigationLink'
import ProductCard from './components/ProductCard/ProductCard'

const filterProductsByCategory = (productsArray, category) => {
  if (!category) {
    return productsArray
  }
  return productsArray.filter((product) => product.category === category)
}

const App = () => {
  // DEFINIZIONE Generica di useState
  // const [value, setValue] = useState(initValue)
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentCategory, setCurrentCategory] = useState('')
  const [search, setSearch] = useState('')

  // Con Array popolato come dipendenza, questo useEffect viene eseguito ogni volta
  // che le dependencies mutano
  useEffect(() => {
    const filteredProductsByCategory = filterProductsByCategory(
      products,
      currentCategory
    )
    setFilteredProducts(filteredProductsByCategory)
  }, [products, currentCategory])

  // Con Array vuoto come dipendenza, questo useEffect viene eseguito solo su mounted
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((initCategories) => setCategories(initCategories))

    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((initProducts) => {
        setProducts(initProducts)
      })
  }, [])

  useEffect(() => {
    const filteredProductsByTitle = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredProducts(filteredProductsByTitle)
  }, [products, search])

  return (
    <>
      <header className="site--bar">
        <h1>Edge-Commerce</h1>
        <ul className="navigation">
          {categories.map((category, index) => {
            return (
              <NavigationLink
                key={index}
                handleClick={() => setCurrentCategory(category)}
                href={`#${index}`}
                text={category}
              />
            )
          })}
        </ul>
        <p>
          Filtra per nome{' '}
          <input
            onChange={(event) => setSearch(event.target.value)}
            type="text"
          />
        </p>
        <div className="products-list">
          {filteredProducts.map((product, index) => {
            return (
              <ProductCard
                key={index}
                name={product.title}
                link={'#' + index}
                price={product.price}
                src={product.image}
              />
            )
          })}
        </div>
      </header>
    </>
  )
}

export default App
