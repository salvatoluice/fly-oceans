import React from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaTimes } from 'react-icons/fa'
import { Link } from "react-router-dom"
import "./cart.css"

const Cart = ({ CartItem, addToCart, decreaseQty, removeFromCart }) => {
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>Your Cart is Empty! Shop Something! <br /> <Link to='/'>Go to Home</Link> </h1>}

            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button style={{cursor: 'pointer'}} className='removeCart' onClick={() => removeFromCart(item)}>
                        <FaTimes />
                      </button>
                    </div>

                    <div className='cartControl d_flex'>
                      <button style={{cursor: 'pointer'}}  className='incCart' onClick={() => addToCart(item)}>
                        <AiOutlinePlus />
                      </button>
                      <button style={{cursor: 'pointer'}} className='desCart' onClick={() => decreaseQty(item)}>
                        <AiOutlineMinus />
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Your Cart</h2>
            <div className=' d_flex'>
              <h4>Total Amount :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
