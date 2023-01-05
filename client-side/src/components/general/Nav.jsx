import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavComponent() {

    const styles = {
		brand: {
		  padding: '0rem 0 0 3rem'
		}
	  }

    return (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand as={Link} to='/' style={styles.brand}>Find Your Adventure</Navbar.Brand>
            <Navbar.Toggle aria-controls = 'basic-navbar-nav' />

                <Nav>
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/bookmarks'>Bookmarks</Nav.Link>
                </Nav>

        </Navbar>
    )
}

export default NavComponent;