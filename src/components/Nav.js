import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Nav.css'
import {Navbar,Nav, NavDropdown} from 'react-bootstrap'

function Navigation() {
    return (
        <div>
        <Navbar className="Menu" collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" >
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >Special offers</Nav.Link>
            <Nav.Link >Login</Nav.Link>
            <Nav.Link >Sign up</Nav.Link>
            <Nav.Link >Contact us</Nav.Link>
            <Nav.Link >English</Nav.Link>
            <Nav.Link>BTC</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>
    )
    
}

export default Navigation;
