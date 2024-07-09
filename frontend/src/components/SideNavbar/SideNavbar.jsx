import React, { useState } from 'react'
import './SideNavbar.css'
import { assets } from '../../assets/assets'

const SideNavbar = ({ menu, setMenu, isOpen, onClose }) => {
  return (
    <div className={`side-navbar ${isOpen ? 'open' : ''}`}>
      <div className="side-navbar-header">
        <img src={assets.cross_icon} alt="Close" onClick={onClose} className="close-icon" />
      </div>
      <ul className="side-navbar-menu">
        <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</li>
        <li onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</li>
        <li onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</li>
      </ul>
    </div>
  )
}

export default SideNavbar
