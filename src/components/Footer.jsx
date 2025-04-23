import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">

          <div className="col-md-4 mb-3">
            <img src={logo} alt="Logo" height="50" className="mb-2" />
            <h5 className="mt-2">ArtisanMap</h5>
            <p className="small">Projet DCLIC – Plateforme dédiée aux artisans du Bénin.</p>
          </div>

          
          <div className="col-md-4 mb-3">
            <h6>Contact</h6>
            <p className="mb-1"><FaPhoneAlt className="me-2" /> +229 66 03 85 12</p>
            <p className="mb-1">artisanmap@projetdclic.bj</p>
          </div>

          
          <div className="col-md-4 mb-3">
            <h6>Suivez-nous</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-white"><FaFacebook size={20} /></a>
              <a href="#" className="text-white"><FaTwitter size={20} /></a>
              <a href="#" className="text-white"><FaInstagram size={20} /></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />

      
        <div className="text-center small">
          &copy; {new Date().getFullYear()} ArtisanMap – Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
