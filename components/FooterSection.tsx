import React from 'react'
import '@/styles/footer.css';


export default function FooterSection() {
  return (
    <div className='footer_parent'>
    {/*  <!-- footer section --> */}
    <div className="footer_section">
      {/* <!-- footer logo --> */}
      <div className="footer_logo">
        <img
          src="/assets/images/alhabtoor_logo-footer.svg"
          alt="alhabtoor_logo-footer"
          className="alhabtoor_logo-footer"
        />
        <p className="logo_text">Member of the Al Habtoor Group</p>
      </div>
      {/* <!-- linksinside the footer --> */}
      <div className="link_inside_footer">
        {/* <!-- row1 --> */}
        <div className="footer_link_row1">
          {/* <!-- home --> */}
          <p className="home_link">Home</p>
          {/* <!-- offers --> */}
          <p className="offers_link">Offers</p>
          {/* <!-- faq --> */}
          <p className="faq_link">FAQ</p>
          {/* <!-- careeer --> */}
          <p className="career_link">Career</p>
        </div>
        {/* <!-- second row --> */}
        <div className="footer_link_row2">
          {/* <!-- about --> */}
          <p className="about_us_link">About Us</p>
          {/* <!-- Locations --> */}
          <p className="locations_link">Locations</p>
          {/* <!-- privacy policy --> */}
          <p className="privacy_link">Privacy Policy</p>
          {/* <!-- term and condition --> */}
          <p className="term_condition_link">Terms & Conditions</p>
        </div>
        {/* <!-- 3 row --> */}
        <div className="footer_link_row3">
          {/* <!-- services --> */}
          <p className="services_link">Services</p>
          {/* <!-- Contact Us --> */}
          <p className="contactus_link">Contact Us</p>
          {/* <!-- service request --> */}
          <p className="service_request_link">Service Request</p>
        </div>
        {/* <!-- Al Habtoor Companies --> */}
        <div className="Al_Habtoor_Companies">
          <p className="Al_Habtoor_Companies_link">Al Habtoor Companies</p>
        </div>
        {/* <!-- hospitality realestate --> */}
        <div className="hospitality_container">
          {/* <!-- hospitality --> */}
          <p className="hospit_link">Hospitality</p>
          {/* <!-- Real Estate --> */}
          <p className="real_estate_link">Real Estate</p>
          {/* <!-- education --> */}
          <p className="education_link">Education</p>
          {/* <!-- publishing --> */}
          <p className="publishing_link">Publishing</p>
          {/* <!-- automotive --> */}
          <p className="automotive_link">Automotive</p>
          {/* <!-- Vehicle Leasing --> */}
          <p className="leasing_link">Vehicle Leasing</p>
        </div>
      </div>
      {/* <!-- fOLLOW US ON --> */}
      <div className="follow_container">
        <p>fOLLOW US ON</p>
      </div>
      {/* <!-- social links  --> */}
      <div className="socila_link_footer_cont">
        <img
          src="/assets/images/socila_link_footer.svg"
          alt="socila_link_footer"
          className="socila_link_footer"
        />
      </div>
      {/* <!-- secure img --> */}
      <div className="secure_img">
        <img
          src="/assets/images/secure_img.svg"
          alt="secure_img"
          className="secure_imge"
        />
      </div>
      {/* <!-- horixontal line --> */}
      <div className="horizontal_line"></div>
      {/* <!-- copy right --> */}
      <div className="copy_right_container">
        <p>© 2018 Car rental LLC - All Rights Reserved.</p>
      </div>
    </div>

    {/* <!-- footer for mobile view  --> */}
      <div className="footer_container_mob">
        <div className="first_section_mob">
          {/* <!-- logo --> */}
          <div className="footer_logo_mob">
            <img
              src="/assets/images/carRentalLogo.svg"
              alt="alhabtoor_logo-footer"
              className="alhabtoor_logo_footer_mob"
            />
            <p className="logo_text_mob">Member of the Al Habtoor Group</p>
          </div>
          <img
            src="/assets/images/socialmedia_mob.svg"
            alt="socialmedia_mob"
            className="socialmedia_mob"
          />
          {/* <!-- first row  --> */}
          <div className="first_row">
            <p className="home_mob">Home</p>
            <p className="offers_mob">Offers</p>
            <p className="career_mob">Career</p>
            <p className="about_mob">About Us</p>
            <p className="location_mob">Locations</p>
          </div>
          {/* <!-- second row --> */}
          <div className="sec_row_mob">
            <p className="faq_mob">FAQ</p>
            <p className="terms_mob">Terms & Conditions</p>
            <p className="service_mob">Service Request</p>
          </div>
          {/* <!-- third row --> */}
          <div className="third_row_mob">
            <p className="privacy_mob">Privacy Policy</p>
            <p className="services_mob">Services</p>
            <p className="contact_mob">Contact Us</p>
          </div>
        </div>

        {/* <!-- second section --> */}
        <div className="footer_sec_section_mob">
          <h3 className="second_sec_title">Al Habtoor Companies</h3>
          {/* <!-- first row  --> */}
          <div className="sec_sec_first_row">
            <p className="hospitality_mob">Hospitality</p>
            <p className="real_mob">Real Estate</p>
            <p className="publish">Publishing</p>
          </div>
          {/* <!-- sec row --> */}
          <div className="sec_row_sec">
            <p className="automotive_mob">Automotive</p>
            <p className="vehicle_mob">Vehicle Leasing</p>
          </div>
        </div>
        {/* <!-- img secure image --> */}
        <img
          src="/assets/images/secure_img_mob.svg"
          alt="secure_img_mob"
          className="secure_img_mob"
        />

        {/* <!-- verticalsection  line--> */}
        <div className="vertical_line_mob"></div>
        <p className="copy_right_mob">
          © 2023 Car rental LLC - All Rights Reserved.
        </p>
      </div>
</div>
  )
}
