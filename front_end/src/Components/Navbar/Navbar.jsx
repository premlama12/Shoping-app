import React, { useState } from 'react'
import "./Navbar.css"
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu,setMenu]=useState("shop")
  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="" />
        <p>E-Mart</p>
      </div>
      <ul className="nav_menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:"none"}}>Shop</Link>  {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:"none"}}>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{textDecoration:"none"}}>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:"none"}}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav_login_cart">
        <Link to='/login'><button>Log In</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav_cart_count">0</div>
      </div>
    </div>
  )
}

export default Navbar
