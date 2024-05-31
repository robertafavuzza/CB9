import React, { useState, useEffect } from 'react';
import NavigationLink from './components/NavigationLink';
import SearchBar from './components/SearchBar';
import Product from './components/Product';
import ProductModal from './components/ProductModal';
import CartModal from './components/CartModal';
import PurchaseModal from './components/PurchaseModal';
import cartIcon from './assets/shopping_cart_market_ecommerce_icon_144576.svg';
import './App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCategories(['all', ...data]);
      } catch (error) {
        setError(error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchResults([]);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleOpenCart = () => {
    setIsCartModalOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartModalOpen(false);
  };

  const handleOpenPurchaseModal = () => {
    setIsPurchaseModalOpen(true);
    setIsCartModalOpen(false);
  };

  const handleClosePurchaseModal = () => {
    setIsPurchaseModalOpen(false);
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  const handleSearch = (query) => {
    if (!query) {
      setSearchResults([]);
      return;
    }
    const results = products.filter(product => 
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const filteredProducts = searchResults.length > 0
    ? searchResults
    : selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <nav className="site--bar">
        <div className="cart-icon" onClick={handleOpenCart}>
          <img src={cartIcon} alt="Cart" className="cart-icon-image" />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </div>
        <SearchBar products={products} onSearch={handleSearch} />
        <div className="navigation-links">
          {categories.map(category => (
            <NavigationLink
              key={category}
              category={category}
              onCategoryChange={handleCategoryChange}
            />
          ))}
        </div>
      </nav>
      <header className="site--claim">
        <h1>Welcome to Edge-Commerce</h1>
      </header>
      <section className="products">
        <h2 className="products--title">Our Products</h2>
        <div className="products--list">
          {filteredProducts.map(product => (
            <Product key={product.id} product={product} onProductClick={handleProductClick} />
          ))}
        </div>
      </section>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} onAddToCart={handleAddToCart} />
      )}
      {isCartModalOpen && (
        <CartModal cart={cart} onClose={handleCloseCart} onRemoveFromCart={handleRemoveFromCart} onPurchase={handleOpenPurchaseModal} />
      )}
      {isPurchaseModalOpen && (
        <PurchaseModal onClose={handleClosePurchaseModal} />
      )}
      <footer className="more">
        <p>Edgemony E-Commerce</p>
      </footer>
    </div>
  );
};

export default App;
