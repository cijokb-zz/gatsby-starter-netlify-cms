import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "gatsby";

const NavigationBar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/" style={{ alignItems: "center" }}>
      St' Vincent De Paul Society Kattoor
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <NavDropdown title="Gallery" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/members">Members</NavDropdown.Item>
          {/* <NavDropdown.Item href="/activities">Activities</NavDropdown.Item> */}
        </NavDropdown>
      </Nav>
      <Nav>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        {/* <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link> */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default NavigationBar;
