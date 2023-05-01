import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Footer() {
  <>
    <Navbar>
      <Container className="categories">
        <Nav className="me-auto">
          <Nav.Link href="#shopping-app">Shopping App</Nav.Link>
          <Nav.Link href="#electronics">Electronics & Computers</Nav.Link>
          <Nav.Link href="#home-gargen-diy">Home, Garden & DIY</Nav.Link>{" "}
          <NavDropdown
            className="nav-dropdown"
            title="Contact Us"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Email</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Instagram</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Phone</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  </>;
}

export default Footer;
