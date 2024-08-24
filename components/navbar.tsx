"use client"

import React, { useState } from 'react'
import '../styles/navbar.css'


export default function Navbar() {

  // state for handling open and close of the menu button
  const [menuOpen, setMenuOpen] = useState(false);

  // functionality for toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
   
    <nav className="navbar">
      <div className="social_img">
        <div className="facebook">
          <img src="assets/images/facebook.svg" alt="facebook" />
        </div>
        <div className="instagram">
          <img src="assets/images/instagram.svg" alt="instagram" />
        </div>
        <div className="twitter">
          <img src="assets/images/tweet.svg" alt="tweet" />
        </div>
        <div className="linkedin">
          <img src="assets/images/linkedin.svg" alt="linkedin" />
        </div>
      </div>

      {/* battery_time_img  inside the mobile device*/}
      <div className="battery_time_img_cont">
        <img
          src="assets/images/battery_time_img.svg"
          alt="battery_time_img"
        />
      </div>
      <div className="hamburgermenu_container">
      <img
        src="assets/images/hamburgermenu.svg"
        alt="hamburgermenu"
        onClick={toggleMenu}
      />
      <div id="hamburgerMenuLinks" className={`menu-links ${menuOpen ? 'open' : 'closed'}`}>
        <img
          src="assets/images/close_hamburger_menu.svg"
          alt="close_btn_menu"
          className="close_btn_menu"
          onClick={toggleMenu}
        />
        <a href="#About">About Us</a>
        <div className="vertical_line_menu"></div>
        <a href="#Offers">Offers</a>
        <div className="vertical_line_menu"></div>
        <a href="#Corporate">Corporate</a>
        <div className="vertical_line_menu"></div>
        <a href="#Personal">Personal</a>
        <div className="vertical_line_menu"></div>
        <a href="#Locations">Locations</a>
        <div className="vertical_line_menu"></div>
        <a href="#Contact">Contact us</a>
        <button className="login">Log In/Sign Up</button>
      </div>
    </div>
      {/* mobile devices end */}

      {/* <!-- car rental --> */}
      <div className='carrental_link_container'>
      <div className="carRental_container">
        <img
          src="assets/images/carRental.svg"
          alt="carRental"
          className="carRental"
        />
        <img
          src="assets/images/carRentalLogo.svg"
          alt="carRentalLogo"
          className="carRentalLogo"
        />
      </div>
      {/* <!-- link container --> */}
      <div className="link_container">
        <div className="links">
          <li className="about">About</li>
          <li className="offers">Offers</li>
          <li className="corparate">Corporate</li>
          <li className="personal">Personal</li>
          <li className="locations">Locations</li>
          <li className="contactus">Contact Us</li>
        </div>
        <div className="profile_cont">
          <img src="assets/images/profile_img.svg" alt="profile_img" />
        </div>
      </div>
    
      </div>
             {/* <!-- small text --> */}
             <p className="text_container">
        Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand
        Sales Counters | All Rates inclusive of VAT. T&C’s apply | Follow us
        on Social Media for New Offers
      </p>
      {/* <!-- small text for mobile  --> */}
      <p className="text_container_mob">Sunday Pick Up/Drop</p>
    
    </nav>
  )
}
