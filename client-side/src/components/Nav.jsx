import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NavComponent = () => {
    return (
        <Navbar>
            <Navbar.Toggle aria-controls = 'basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav>
                    <Nav.Link as={Link} to='/'>Homepage</Nav.Link>
                    <Nav.Link as={Link} to='/search'>Search</Nav.Link>
                    <Nav.Link as={Link} to='/about'>About</Nav.Link>
                    <Nav.Link as={Link} to='/bookmarks'>Bookmarks</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavComponent;