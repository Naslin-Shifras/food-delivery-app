import React, { useState } from 'react'
import './SideNavbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const SideNavbar = ({ menu, setMenu, isOpen, onClose }) => {
  return (
    <div className={`side-navbar ${isOpen ? 'open' : ''}`}>
      <div className="side-navbar-header">
        <img src={assets.cross_icon} alt="Close" onClick={onClose} className="close-icon" />
      </div>
      <ul className="side-navbar-menu">
          <a href='#navbar' to='/'  onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</a>
          <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
          <a href='#app-download' onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</a>
          <a href='#footer' onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</a>
      </ul>
    </div>
  )
}

export default SideNavbar
