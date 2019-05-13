import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

function MyNav() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
        <Navbar.Brand id="gtext" href="/">Desiree's Designs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" id="my-nav">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <NavDropdown title="Extra Content" id="basic-nav-dropdown">
                <NavDropdown.Item href="/music">Music</NavDropdown.Item>
                <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNav;