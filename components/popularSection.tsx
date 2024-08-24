"use client"
import React, { useState } from "react";
import "../styles/popularSection.css";

export default function PopularSection() {

  type objData = {
    name: string;
    email: string;
    phone: string;
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regex = /^\d{10}$/;

  const [data, setData] = useState<objData>({
    name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    if (data.name === "" || data.email === "") {
      setError("Fields must not be empty");
    } else if (name === "email" && !emailRegex.test(value)) {
      setError("Invalid email format");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (data.name === "" || data.email === "") {
      setError("Fields must not be empty");
    } else {
      setError("");
      alert("Subscribed");
    }
  };

  const phoneSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (data.phone === "") {
      setPhoneError("Field is Empty");
    } else if (!regex.test(data.phone)) {
      setPhoneError("Should include 10 numbers");
    } else {
      setError("");
      alert("Link sent");
    }
  };



  return (
    // <!-- popular cars -->
    <div className="popular_car_container">
      <h2 className="most_popular_car">Most popular cars</h2>
      {/* <!-- card section --> */}
      <div className="card_wrapper">
        <div className="card_container">
          {/* <!-- img container --> */}
          <div className="blue_car_container">
            <img src="/assets/images/blue_car.svg" alt="blue_car" />
          </div>
          {/* <!-- card content --> */}
          <div className="card_content">
            <p className="card_title">Mitsubishi Eclipse</p>
            <p className="card_cont">
              Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV
              mobility with signature Mitsubishi styling, technology and driving
              confidence.
            </p>
            {/* <!-- mobile view  --> */}
            <p className="card_cont_mob">
              With its aerodynamic curves and bold lines, this car is a standout
              on the road...
            </p>
            {/* <!-- car featyures --> */}
            <div className="car_feature_container">
              <img src="/assets/images/car_features.svg" alt="car_features" />
            </div>
            {/* <!-- card price --> */}
            <div className="card_price">
              <p className="para_desktop">AED 2700/ Monthly</p>
              {/* <!-- mobile view --> */}
              <p className="price_mob">
                AED 2700/ <span>Monthly</span>
              </p>
            </div>
            <button className="book_now_btn">Book Now</button>
          </div>
        </div>
        {/* <!-- card2 --> */}
        <div className="card_container2">
          {/* <!-- img container --> */}
          <div className="blue_car_container">
            <img src="/assets/images/red_car_img.svg" alt="red_car_img" />
          </div>
          {/* <!-- card content --> */}
          <div className="card_content">
            <p className="card_title">Jac J7</p>
            <p className="card_cont">
              Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV
              mobility with signature Mitsubishi styling, technology and driving
              confidence.
            </p>
            {/* <!-- mobile view  --> */}
            <p className="card_cont_mob">
              With its aerodynamic curves and bold lines, this car is a standout
              on the road...
            </p>
            {/* <!-- car featyures --> */}
            <div className="car_feature_container">
              <img src="/assets/images/car_features.svg" alt="car_features" />
            </div>
            {/* <!-- card price --> */}
            <div className="card_price">
              <p className="card2_price_Desk">AED 2700/ Monthly</p>
              {/* <!-- mobile view --> */}
              <p className="price_mob">
                AED 2700/ <span>Monthly</span>
              </p>
            </div>
            <button className="book_now_btn2">Book Now</button>
          </div>
        </div>
      </div>

      {/* subscribe section */}
      <div className="offeres_container_parent">
        <div className="offeres_container">
          <div className="offers_first_sec">
            <h2 className="offers_first_sec_title">
              Subscribe here for exclusive offers and updates!
            </h2>
            {/* <!-- input --> */}
            <div className="offer_input_container">
              <input type="text" name="name" placeholder="Name" className="name_input" onChange={handleChange}  />
              {/* <span className="nameValidationSpan">{nameValidationMsg}</span> */}
              <input type="text" name="email" placeholder="Email" className="email_input" onChange={handleChange}  />
              <span className="emailValidationSpan">{error}</span>
            </div>
            <p className="offers_para">
              Don&#39;t miss out! enter your email and your name, then hit subscribe
              to unlock a world of special offers and details.
            </p>
            {/* <!-- mobile view para  --> */}
            <p className="mobile_view_para">
              Please select the ways you would like to hear from Diamondlease,
              and confirm that you’re happy for us to store your data in line
              with our Privacy Policy.
            </p>

            <button className="subscribe_btn" onClick={handleSubmit}>Subscribe</button>
          </div>
          {/* <!-- second section --> */}
          <div className="offer_sec_section">
            <div className="phone_img_cont">
              <img src="/assets/images/mobilePhone.svg" alt="mobilePhone" />
            </div>
            {/* <!-- para contsiner --> */}
            <div className="phone_para_cont">
              <p className="phone_para">
                Enter your number and receive a direct link to download the app
              </p>
            </div>
            {/* <!-- input container --> */}
            <div className="enter_ph_no_container">
              <input type="number" name="phone" placeholder="Enter the phone number" onChange={handleChange}  />
              <span className="validation_span">{phoneError}</span>
            </div>
            {/* <!-- get link button --> */}
            <div className="get_link_cintainer">
              <button type="submit" onClick={phoneSubmit}>Get the link</button>
            </div>
            <p className="get_in_on">Get in on</p>
            {/* <!-- red apple --> */}
            <div className="red_apple_container">
              <img src="/assets/images/red_apple.svg" alt="red_apple" />
            </div>
            {/* <!-- red google --> */}
            <div className="red_google_container">
              <img src="/assets/images/red_google.svg" alt="red_google" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
