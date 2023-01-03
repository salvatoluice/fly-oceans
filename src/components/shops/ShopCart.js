import React, { useState } from "react"
import { AiFillStar } from 'react-icons/ai'
import './shop.css'

const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div className='card' style={{}} key={index}>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt='' />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <div className='rate'>
                    <AiFillStar color="yellow"/>
                    <AiFillStar color="yellow"/>
                    <AiFillStar color="yellow"/>
                    <AiFillStar color="yellow"/>
                    <AiFillStar color="yellow"/>
                </div>
                <div className='price'>
                  <h4>${shopItems.price}.00 </h4>
                  <p className="button" onClick={() => addToCart(shopItems)}>
                    Add to Cart
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart