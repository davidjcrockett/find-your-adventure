import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavComponent() {
    return (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand as={Link} to='/'>Find Your Adventure</Navbar.Brand>
            <Navbar.Toggle aria-controls = 'basic-navbar-nav' />
            <Navbar.Collapse className="justify-content-end">
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