import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={assets.logo} alt="Tomato Logo" className="footer-logo" />
          <p>
            Welcome to Tomato, your go-to app for discovering the best dishes near you. Our mission is to connect food lovers with the best restaurants and culinary delights in their area. Whether you're craving a quick bite or a gourmet meal, Tomato has got you covered.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-center">
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>Contact Us</h2>
          <ul>
            <li>Phone: +94-777-111-111</li>
            <li>Email: contact@tomato.com</li>
            <li>Address: 123 Foodie Street, Gourmet City</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">&copy; {new Date().getFullYear()} Tomato. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
