"use client";

import React, { useEffect, useState } from "react";
import "../styles/header.css";

export default function Header() {
  // function for toggling the quick book button

  // type for the slides specifying the types of slide array
  type Slide = {
    imgSrc: string;
    altText: string;
    content: JSX.Element;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  // array of carousels
  const slides: Slide[] = [
    {
      imgSrc: "assets/images/summer_promotion_img.svg",
      altText: "summer_promotion_img",
      content: (
        <>
          <p className="summer_content_para">
            Receive guaranteed <br />
            on a monthly hire or lease
          </p>
          <p className="green_para">gift voucher</p>
        </>
      ),
    },
    {
      imgSrc: "assets/images/summer_promotion_img.svg",
      altText: "summer_promotion_img",
      content: (
        <>
          <p className="summer_content_para">
            Receive guaranteed <br />
            on a monthly hire or lease
          </p>
          <p className="green_para">gift voucher</p>
        </>
      ),
    },
    {
      imgSrc: "assets/images/summer_promotion_img.svg",
      altText: "summer_promotion_img",
      content: (
        <>
          <p className="summer_content_para">
            Receive guaranteed <br />
            on a monthly hire or lease
          </p>
          <p className="green_para">gift voucher</p>
        </>
      ),
    },
  ];

  // useEffect for auto sliding 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // toogle quickbook button visible 
  const [isQuickBookVisible, setIsQuickBookVisible] = useState(false);

  const toggleQuickBook: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsQuickBookVisible(!isQuickBookVisible);
  };

  // toggle the active tabs 
  const [activeTab, setActiveTab] = useState('sameAsPickUp');

  // setting the tab name 
  const openTab = (tabName: string) => {
    setActiveTab(tabName);
  };

// tab content
const tabs = [
  { name: 'sameAsPickUp', label: 'Same as Pick-Up' },
  { name: 'differentDropOff', label: 'Different Drop-Off' },
];
// data for the form group
const sameAsPickUpFields = [
  { id: 'location_input', placeholder: 'Pickup Location' },
  { id: 'location_input', placeholder: 'Pickup Location' },
  { id: 'calender', placeholder: 'Pick-Up Date', type: 'datetime-local', name: 'pickupdate' },
  { id: 'calender', placeholder: 'Drop-Off Date', type: 'datetime-local', name: 'dropoffdate' },
];

const differentDropOffFields = [
  { id: 'location_input', placeholder: 'Drop-Off Location' },
  { id: 'location_input', placeholder: 'Drop-Off Location' },
  { id: 'calender', placeholder: 'Drop-Off Date', type: 'datetime-local', name: 'dropoffdate' },
  { id: 'calender', placeholder: 'Drop-Off Date', type: 'datetime-local', name: 'dropoffdate' },
];

  return (
    <div className="header_parent">
      <div className="red_container">
       
        <div className="start_container">
          <p className="pickup_text">Same as Pick-Up</p>

          <p className="dropoff">Different Drop-Off</p>

          <select
            id="vehicleType"
            name="vehicleType"
            className="vehicle_dropdown"
          >
            <option value="sedan">Select vehicle type</option>
            <option value="suv">SUV</option>
            <option value="truck">Truck</option>
            <option value="convertible">Convertible</option>
            <option value="van">Van</option>
          </select>
        </div>

        {/* input containers */}
        <div className="input_container">
          {/* input for locations */}
          <img
            src="assets/images/location_img.svg"
            alt="location_img"
            className="location_img"
          />
          <select
            id="vehicleType"
            name="vehicleType"
            className="locations_dropdown"
          >
            <option value="sedan" className="location_options">
              Al Quoz
            </option>
            <option value="suv">SUV</option>
            <option value="truck">Truck</option>
            <option value="convertible">Convertible</option>
            <option value="van">Van</option>
          </select>
          <img
            src="assets/images/red_doen_arrow.svg"
            alt="red_doen_arrow"
            className="red_doen_arrow"
          />

          {/* input for first date */}
          <img
            src="assets/images/calender.svg"
            alt="calender"
            className="calender_date_time"
          />
          <input
            type="datetime-local"
            id="appointment"
            name="appointment"
            className="date_time_local"
            value="2024-08-15T09:00"
          />

          {/* input for second date  */}
          <img
            src="assets/images/calender.svg"
            alt="calender"
            className="calender_date_time"
          />
          <input
            type="datetime-local"
            id="appointment2"
            name="appointment"
            className="date_time_local2"
            value="2024-08-15T09:00"
          />

          {/* search image  icon */}
          <img
            src="assets/images/search_img.svg"
            alt="search_img"
            className="search_img"
          />
          {/* vertical line  */}
          <div className="vertical_line"></div>

          {/* quick book button */}
          <button className="Quick_book_btn">Quick Book </button>
        </div>

        {/* red container third row */}
        <p className="red_content">
          Download our App for easy accessibility anytime, anywhere!
        </p>
        {/* <!-- applecontainer --> */}
        <div className="apple_container">
          <img src="assets/images/apple_img.svg" alt="apple_img" />
        </div>
        {/* <!-- google container --> */}
        <div className="google_container">
          <img src="assets/images/google_img.svg" alt="google_img" />
        </div>
      </div>

      {/* support icons */}
      <div className="support_icon">
        {/* call icon */}
        <img
          src="assets/images/call_icon.svg"
          alt="call_icon"
          className="call_icon"
        />
        {/* twentyfoure * 7 */}
        <div className="twentyfourebyseven_cont">
          <img
            src="assets/images/24by7.svg"
            alt="24by7"
            className="twentyfourebyseven"
          />
        </div>
      </div>




      {/* <!-- content for mobile button for book car and quick book   --> */}
      {/* <!-- book a car --> */}
      <div className="quickbook_btn_container">
        <button className="book_car_btn">Book a Car</button>
        <button
          className="quick_book_btn"
          onClick={toggleQuickBook}
          id="quickBookButton"
        >
          Quick Book
        </button>

        <div id="quickBookContent" className={`quick_book_content ${isQuickBookVisible ? 'show' : ''}`}>
          <div className="tab">
            {tabs.map(tab => (
              <button
                key={tab.name}
                className={`tablinks ${activeTab === tab.name ? 'active' : ''}`}
                onClick={() => openTab(tab.name)}
              >
                {tab.label}
              </button>
            ))}
            <select id="vehicleType" name="vehicleType">
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="truck">Truck</option>
              <option value="bus">Bus</option>
              <option value="bicycle">Bicycle</option>
            </select>
          </div>

          <div id="sameAsPickUp" className={`tabcontent ${activeTab === 'sameAsPickUp' ? 'active' : ''}`}>
            {sameAsPickUpFields.map((group, index) => (
              <div key={index} className="form-group">
                <img src={`/assets/images/${group.id}.svg`} alt={group.id} />
                <img
                  src="/assets/images/down_arrow_red_input.svg"
                  alt="down_arrow_red_input"
                  className="down_arrow_red_input"
                />
                <input
                  type={group.type || 'text'}
                  placeholder={group.placeholder}
                  name={group.name}
                />
              </div>
            ))}
          </div>

          <div id="differentDropOff" className={`tabcontent ${activeTab === 'differentDropOff' ? 'active' : ''}`}>
            {differentDropOffFields.map((group, index) => (
              <div key={index} className="form-group">
                <img src={`/assets/images/${group.id}.svg`} alt={group.id} />
                <img
                  src="/assets/images/down_arrow_red_input.svg"
                  alt="down_arrow_red_input"
                  className="down_arrow_red_input"
                />
                <input
                  type={group.type || 'text'}
                  placeholder={group.placeholder}
                  name={group.name}
                />
              </div>
            ))}
          </div>

          <button className="search_btn">Search</button>
        </div>
      </div>



      {/* summer promotion section */}
      <div className={`carousel ${isQuickBookVisible ? 'quickbook-open' : ''}`}>
        <div
          className="slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <div className="summer_promotion_container">
                <img
                  src={slide.imgSrc}
                  alt={slide.altText}
                  className="summer_promotion_img"
                />
                <div className="text_container_summer">{slide.content}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
