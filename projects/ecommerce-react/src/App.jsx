import './App.css'
import { useState, useEffect } from 'react'
import NavigationLink from './components/NavigationLink/NavigationLink'
import ProductCard from './components/ProductCard/ProductCard'

// Utilizzo di await a top-level
// const initialCategories = await fetch(
//   "https://fakestoreapi.com/products/categories"
// ).then((res) => res.json());

// const initialProducts = await fetch("https://fakestoreapi.com/products/").then(
//   (res) => res.json()
// );

const App = () => {
  // DEFINIZIONE Generica di useState
  // const [value, setValue] = useState(initValue)
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((initCategories) => setCategories(initCategories))

    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((initProducts) => {
        setProducts(initProducts)
      })

    // Esecuzione di useEffect al Mounted di App.jsx
    console.log('App Mounted')
  }, [])

  // CATENA DI THEN
  //
  //   fetch("https://fakestoreapi.com/products/")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

  // ASYNC ARROW FUNCTION
  //
  // const getProducts = async () => {
  //   const res = await fetch("https://fakestoreapi.com/products/");
  //   const data = await res.json();

  //   console.log(data);
  // };

  // ASYNC FUNCTION
  //
  // async function getProducts() {
  //   fetch("https://fakestoreapi.com/products/")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }

  // getProducts();

  return (
    <>
      <header className="site--bar">
        <h1>Edge-Commerce</h1>
        <ul className="navigation">
          {categories.map((category, index) => {
            return (
              <NavigationLink key={index} href={`#${index}`} text={category} />
            )
          })}
        </ul>
        {/* slice(2) per rimuovere i primi due elementi dell'Array */}
        <button onClick={() => setCategories(categories.slice(2))}>
          Modifica Categories
        </button>
        <div className="products-list">
          {products.map((product, index) => {
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
