import './App.css';
import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import Login from '../src/common/header/Login'
import Register from '../src/common/header/Register'
import Reset from '../src/common/header/Reset'
import { Routes, Route } from 'react-router-dom';
import Sdata from "./components/shops/Sdata"
import Data from "./components/Data"
import { useState } from 'react';
import Pages from './pages/Pages';
import Cart from './common/cart/Cart';
import Dashboard from './common/header/Dashboard';


function App() {
 
  const { productItems } = Data
  const { shopItems } = Sdata

 
  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const removeFromCart = (product) => {
    setCartItem(CartItem.filter((item) => item.id !== product.id))
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

 
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
   
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  return (
    <div className="App">
      <Header CartItem={CartItem} />
      <Routes>
        <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>}   />
        <Route path='/cart' element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeFromCart={removeFromCart}/>}  />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/contact' element={<Footer />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
