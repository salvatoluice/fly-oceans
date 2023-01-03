import './App.css';
import Header from './common/header/Header';
import { Routes, Route } from 'react-router-dom';
import Sdata from "./components/shops/Sdata"
import Data from "./components/Data"
import { useState } from 'react';
import Pages from './pages/Pages';
import Cart from './common/cart/Cart';


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
      </Routes>
      
    </div>
  );
}

export default App;
