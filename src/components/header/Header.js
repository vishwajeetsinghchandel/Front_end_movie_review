// src/components/Header.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleRegisterClose = () => setShowRegister(false);

  const handleLoginShow = () => setShowLogin(true);
  const handleRegisterShow = () => setShowRegister(true);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: 'gold' }}>
          <FontAwesomeIcon icon={faVideoSlash} /> Gold
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/watchList">Watch List</NavLink>
          </Nav>
          <Button variant="outline-info" className="me-2" onClick={handleLoginShow}>Login</Button>
          <Button variant="outline-info" onClick={handleRegisterShow}>Register</Button>
        </Navbar.Collapse>

        {/* Login Modal */}
        <Modal show={showLogin} onHide={handleLoginClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Login form */}
            <form onSubmit={(e) => { e.preventDefault(); alert('Logged in'); }}>
              <div className="mb-3">
                <label>Username</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control" required />
              </div>
              <Button variant="primary" type="submit">Login</Button>
            </form>
          </Modal.Body>
        </Modal>

        {/* Register Modal */}
        <Modal show={showRegister} onHide={handleRegisterClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Register form */}
            <form onSubmit={(e) => { e.preventDefault(); alert('Registered'); }}>
              <div className="mb-3">
                <label>Username</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control" required />
              </div>
              <Button variant="primary" type="submit">Register</Button>
            </form>
          </Modal.Body>
        </Modal>
      </Container>
    </Navbar>
  );
};

export default Header;
