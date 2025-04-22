import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token'); // ✅ Vérifie s'il y a un token

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <BootstrapNavbar style={{ backgroundColor: '#007bff' }} expand="lg" variant="dark">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            height="50"
            className="d-inline-block align-top me-2"
          />
          <span style={{ fontWeight: 'bold', color: 'white' }}>ArtisanMap</span>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Accueil</Nav.Link>
            <Nav.Link as={Link} to="/a-propos" style={{ color: 'white' }}>À propos</Nav.Link>
            <Nav.Link as={Link} to="/artisans" style={{ color: 'white' }}>Artisans</Nav.Link>

            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/admin/artisans" style={{ color: 'white' }}>
                  GestionArtisans
                </Nav.Link>
                <Nav.Link onClick={handleLogout} style={{ color: 'white' }}>
                  Déconnexion
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/connexion" style={{ color: 'white' }}>Connexion</Nav.Link>
                <Nav.Link as={Link} to="/inscription" style={{ color: 'white' }}>Inscription</Nav.Link>
              </>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
