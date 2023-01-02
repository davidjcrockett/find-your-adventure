import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavComponent() {
    return (
        <Navbar>
            <Navbar.Toggle aria-controls = 'basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Navbar.Brand as={Link} to='/'>Find Your Adventure</Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to='/genres'>Genres</Nav.Link>
                    <Nav.Link as={Link} to='/platforms'>Platforms</Nav.Link>
                    <Nav.Link as={Link} to='/bookmarks'>Bookmarks</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavComponent;