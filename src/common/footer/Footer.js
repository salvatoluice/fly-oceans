import React from "react"
import {FaGooglePlay} from 'react-icons/fa'
import { BsApple } from 'react-icons/bs'
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Fly-Oceans</h1>
            <p>We offer competitive prices on our 100 million plus product any range. 24hr customer service!</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <FaGooglePlay />
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <BsApple />
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>70 Street, Ngong Lane Plaza, Ngong Rd, Nairobi Kenya</li>
              <li>salvatoluice5@gmail.com</li>
              <li>Phone: +254 113 794 219</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
