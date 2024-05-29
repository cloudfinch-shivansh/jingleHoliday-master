import React from 'react';
import './index.css'; // Make sure to import your CSS file

import { faInstagram, faTwitter, faLinkedinIn, faFacebook, faSnapchat, faPinterest, faTumblr, faReddit, faYoutube, faWhatsapp, faTelegram, faTiktok, faYahoo } from '@fortawesome/free-brands-svg-icons';

import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid-item animated-section">
        <h2 className="animated-title">Jingle Holiday Bazaar</h2>
        <a href="#" className="animated-link">
          <FontAwesomeIcon icon={faPhone} className="icon" /> +918506922777
        </a>
       
        <a href="#" className="animated-link">
          <FontAwesomeIcon icon={faEnvelope} className="icon" /> jingleholidaybazar
        </a>
        <a href="#" className="animated-link">
          <FontAwesomeIcon icon={faPhone} className="icon" /> 24 X 7 Support
        </a>
       
        <a href="#" className="animated-link">
          <FontAwesomeIcon icon={faEnvelope} className="icon" /> jingleholidaybazar
        </a>
      </div>
      
      <div className="grid-item animated-section">
        <h2 className="animated-title">Quick Links</h2>
        <a href="#" className="animated-link">Home</a>
        <a href="#" className="animated-link">About Us</a>
        <a href="#" className="animated-link">Blog list</a>
        <a href="#" className="animated-link">Destinations</a>
        <a href="#" className="animated-link">Hotels</a>
        <a href="#" className="animated-link">Gallery</a>
      </div>

      <div className="grid-item animated-section">
        <h2 className="animated-title">Domestic Packages</h2>
        <a href="#" className="animated-link">Uttrakhand</a>
        <a href="#" className="animated-link">Mumbai</a>
        <a href="#" className="animated-link">Ladakh</a>
        <a href="#" className="animated-link">Meghalaya</a>
        <a href="#" className="animated-link">North East India</a>
        <a href="#" className="animated-link">Rajasthan</a>
      </div>

      <div className="grid-item animated-section">
        <h2 className="animated-title">Foreign Packages</h2>
        <a href="#" className="animated-link">Maldives</a>
        <a href="#" className="animated-link">Singapore</a>
        <a href="#" className="animated-link">Switzerland</a>
        <a href="#" className="animated-link">Saudi Arabia</a>
        <a href="#" className="animated-link">Thailand</a>
        <a href="#" className="animated-link">Dubai</a>
      </div>

      <div className="grid-item animated-section">
        <h2 className="animated-title">Yatra</h2>
        <a href="#" className="animated-link">Vaishno Devi</a>
        <a href="#" className="animated-link">Kedarnath</a>
        <a href="#" className="animated-link">Badrinath</a>
        <a href="#" className="animated-link">Chardham</a>
        <a href="#" className="animated-link">Ramayana</a>
        <a href="#" className="animated-link">Naudevi</a>
      </div>
      
      <div className="powered-by">
        Powered By | Namrata Universal | All Rights are Reserved by Jingleholidaybazar
      </div>
      
      <div className="grid-item social-media">
        <h2 className="animated-title">Social Media</h2>
        <div className="icons">
          <a href="#"><FontAwesomeIcon icon={faFacebook} size="2x" className="fa-icon animated-icon" /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} size="2x" className="fa-icon animated-icon" /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} size="2x" className="fa-icon animated-icon" /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedinIn} size="2x" className="fa-icon animated-icon" /></a>
        </div>
      </div>
      
      <div className="grid-item social-media">
        <h2 className="animated-title">Social Media</h2>
        <div className="icons">
          <a href="#"><FontAwesomeIcon icon={faSnapchat} size="2x" className="fa-icon animated-icon" /></a>
          <a href="#"><FontAwesomeIcon icon={faPinterest} size="2x" className="fa-icon animated-icon" /></a>
          <a href="#"><FontAwesomeIcon icon={faTumblr} size="2x" className="fa-icon animated-icon" /></a>
          <a href="#"><FontAwesomeIcon icon={faReddit} size="2x" className="fa-icon animated-icon" /></a>
        </div>
      </div>
      
      <div className="grid-item social-media">
        <h2 className="animated-title">Social Media</h2>
        <div className="icons">
          <a href="#"><FontAwesomeIcon icon={faYoutube} size="2x" className="fa-icon animated-icon" /></a>
          <a href="#"><FontAwesomeIcon icon={faWhatsapp} size="2x" className="fa-icon animated-icon" /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} size="2x" className="fa-icon animated-icon" /></a>
          <a href="#"><FontAwesomeIcon icon={faTelegram} size="2x" className="fa-icon animated-icon" /></a>
        </div>
      </div>
      
      <div className="grid-item social-media">
        <h2 className="animated-title">Social Media</h2>
        <div className="icons">
          <a href="#"><FontAwesomeIcon icon={faTiktok} size="2x" className="fa-icon animated-icon" /></a>
          <a href="#"><FontAwesomeIcon icon={faReddit} size="2x" className="fa-icon animated-icon" /></a>
          <a href="#"><FontAwesomeIcon icon={faYahoo} size="2x" className="fa-icon animated-icon" /></a>
          <a href="#"><FontAwesomeIcon icon={faGoogle} size="2x" className="fa-icon animated-icon" /></a>
        </div>
      </div>
      
      
      
    </footer>
  );
};

export default Footer;
