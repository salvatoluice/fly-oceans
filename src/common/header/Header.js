import React from "react"
import "./header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem }) => {
  return (
    <div style={{position: 'fixed', width: '100%', zIndex: 999  }}>
      <Head />
      <Search CartItem={CartItem} />
      <Navbar />
    </div>
  )
}

export default Header
