import React from 'react';
import Card from 'react-bootstrap/Card';

const Footer = () => {
    return (
        <Card>
            <Card.Footer> {new Date().getFullYear()} - Built by David J. Crockett - Powered by <a href="https://rawg.io/" target="_blank" rel="noopener noreferrer">rawg.io</a></Card.Footer>
        </Card>
    )
}

export default Footer;