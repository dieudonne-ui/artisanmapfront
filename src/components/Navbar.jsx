import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png';
import './Navbar.css'; 

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <BootstrapNavbar style={{ backgroundColor: '#007bff' }} expand="lg" variant="dark">
      <Container>
        <BootstrapNavbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <img src={logo} alt="Logo" height="50" className="d-inline-block align-top me-2" />
          <span style={{ fontWeight: 'bold', color: 'white' }}>ArtisanMap</span>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="nav-item-link">Accueil</Nav.Link>
            <Nav.Link as={NavLink} to="/a-propos" className="nav-item-link">À propos</Nav.Link>
            <Nav.Link as={NavLink} to="/artisans" className="nav-item-link">Artisans</Nav.Link>

            {isLoggedIn ? (
              <>
                <Nav.Link as={NavLink} to="/admin/artisans" className="nav-item-link">GestionArtisans</Nav.Link>
                <Nav.Link onClick={handleLogout} className="nav-item-link">Déconnexion</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/connexion" className="nav-item-link">Connexion</Nav.Link>
                <Nav.Link as={NavLink} to="/inscription" className="nav-item-link">Inscription</Nav.Link>
              </>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
