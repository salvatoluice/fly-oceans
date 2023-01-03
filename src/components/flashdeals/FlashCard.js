import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { AiFillHeart, AiFillStar } from 'react-icons/ai'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'
import './flash.css'

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <BsArrowRightShort color="#fff" size={40} />
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <BsArrowLeftShort color="#fff" size={40}/>
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{productItems.discount}% Off</span>
                  <img src={productItems.cover} alt='' />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <AiFillHeart size={30} color='#fff' style={{cursor: 'pointer'}} onClick={increment} />
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{productItems.name}</h3>
                  <div className='rate'>
                    <AiFillStar color="yellow"/>
                    <AiFillStar color="yellow"/>
                    <AiFillStar color="yellow"/>
                    <AiFillStar color="yellow"/>
                    <AiFillStar color="yellow"/>
                    
                  </div>
                  <div className='price'>
                    <h4>Ksh. {productItems.price}.00 </h4>
                    <p className="button" onClick={() => addToCart(productItems)}>
                      Add to Cart
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard