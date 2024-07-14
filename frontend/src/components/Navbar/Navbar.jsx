import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import SideNavbar from '../SideNavbar/SideNavbar';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("Home");
    const [sideNavOpen, setSideNavOpen] = useState(false);

    const toggleSideNav = () => {
        setSideNavOpen(!sideNavOpen);
    };

    const{getTotalCartAmount} = useContext(StoreContext);

    return (
        <>
            <div className='navbar' id='navbar'>
                <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
                <ul className="navbar-menu">
                    <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
                    <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
                    <a href='#app-download' onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</a>
                    <a href='#footer' onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</a>
                </ul>
                <div className="navbar-right">
                    <img className="side nav-button" src={assets.grey_menu} alt="" onClick={toggleSideNav} />
                    <img src={assets.search_icon} alt="" />
                    <div className="navbar-serch-icon">
                        <Link to='/cart' ><img src={assets.basket_icon} alt="" /></ Link>
                        <div className={getTotalCartAmount()===0?"":"dot"}></div>
                    </div>
                    <button onClick={()=>setShowLogin(true)}>sign in</button>
                </div>
            </div>
            <SideNavbar menu={menu} setMenu={setMenu} isOpen={sideNavOpen} onClose={toggleSideNav} />
        </>

    )
}

export default Navbar