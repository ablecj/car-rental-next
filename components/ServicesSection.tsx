import React from 'react'
import '@/styles/services.css';

export default function ServicesSection() {
  return (
    // <!-- easy steps -->
    <div className="rent_container">
      {/* <!-- title container --> */}
      <div className="title_container">
        <h2 className="rent_title">Rent/Lease In three easy steps</h2>
        <h2 className="rent_title_mob">Rent/Lease in 3 Easy Steps</h2>
      </div>
      {/* <!-- date --> */}
      <div className="date_container">
        <div className="one_cont"><p>01</p></div>
        <div className="two_cont"><p>02</p></div>
        <div className="three_cont"><p>03</p></div>
      </div>
      {/* <!-- content section --> */}
      <div className="location_date_car">
        {/* <!-- location --> */}
        <div className="location_cont">
          <div className='location_inner_cont'>
          <img
            src="assets/images/loaction.svg"
            alt="loaction"
            className="loaction"
          />
          <p className="location_text">
            Select the location. Browse through our available options and find
            the perfect car to suit your needs
          </p>
          </div>
        </div>
        {/* <!-- calander --> */}
        <div className="calender_cont">
          <img
            src="assets/images/calender_img.svg"
            alt="calender_img"
            className="calender_img"
          />
          <p>Choose your desired Pick-Up date and time.</p>
        </div>
        {/* <!-- car  --> */}
        <div className="car_cont">
          <img
            src="assets/images/red_car_svg.svg"
            alt="red_car_svg"
            className="red_car_svg"
          />
          <p>
            Make payment and book the car. Select an option to either have the
            car delivered to your location or pick it up directly from us.
          </p>
        </div>
      </div>
      {/* <!-- our locations --> */}
      <div className="our_locations_container">
        <h2>Locations</h2>
        {/* <!-- dubai --> */}
        
        <div className="dubai_container">
          <img
            src="assets/images/dubai_location.svg"
            alt="dubai_location"
            className="dubai_location"
          />
          <p>Dubai</p>
        </div>
        <div className="dubai_vertical_line"></div>
        {/* <!-- abhu dhabhi --> */}
        <div className="abhudhabhi_container">
          <img
            src="assets/images/abhudhabhi_loc.svg"
            alt="abhudhabhi_loc"
            className="abhudhabhi_loc"
          />
          <p>Abu Dhabi</p>
          <div className="abhudhabhi_vertical"></div>
        </div>
        {/* <!-- sharja --> */}
        <div className="sharja_container">
          <img
            src="assets/images/sharja_location.svg"
            alt="sharja_location"
            className="sharja_location"
          />
          <p>Sharjah</p>
          <div className="sharja_vertical"></div>
        </div>
        {/* <!-- fujairha --> */}
        <div className="fujairha_container">
          <img
            src="assets/images/abhudhabhi_loc.svg"
            alt="fujairha_loc"
            className="fujairha_loc"
          />
          <p>Fujairah</p>
          <div className="fujairha_vertical"></div>
        </div>
        {/* <!-- ras al khaimha  --> */}
        <div className="rasalkhaima_container">
          <img
            src="assets/images/abhudhabhi_loc.svg"
            alt="rasalkhaima"
            className="rasalkhaima"
          />
          <p>Ras Al Khaimah</p>
        </div>
      </div>
    </div>
  )
}
