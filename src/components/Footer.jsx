import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
return (
<footer className="bg-light py-3 mt-5">
<div className="container text-center">
<img src={logo} alt="Logo" height="30" className="mb-2" />
<p className="mb-0">&copy; {new Date().getFullYear()} ArtisanMap. Tous droits réservés.</p>
</div>
</footer>
);
};

export default Footer;