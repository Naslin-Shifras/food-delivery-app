import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import SideNavbar from '../SideNavbar/SideNavbar';

const Navbar = () => {

    const [menu, setMenu] = useState("Home");
    const [sideNavOpen, setSideNavOpen] = useState(false);

    const toggleSideNav = () => {
        setSideNavOpen(!sideNavOpen);
    };



    return (
        <>
            <div className='navbar'>
                <img src={assets.logo} alt="" className="logo" />
                <ul className="navbar-menu">
                    <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
                    <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</li>
                    <li onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</li>
                    <li onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</li>
                </ul>
                <div className="navbar-right">
                    <img className="side nav-button" src={assets.grey_menu} alt="" onClick={toggleSideNav} />
                    <img src={assets.search_icon} alt="" />
                    <div className="navbar-serch-icon">
                        <img src={assets.basket_icon} alt="" />
                        <div className="dot"></div>
                    </div>
                    <button>sign in</button>
                </div>
            </div>
            <SideNavbar menu={menu} setMenu={setMenu} isOpen={sideNavOpen} onClose={toggleSideNav} />
        </>

    )
}

export default Navbar