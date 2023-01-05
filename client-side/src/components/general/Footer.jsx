import React from 'react';
import Card from 'react-bootstrap/Card';

function Footer() {
    return (
        <Card>
            <Card.Footer className='text-center p-2'> {new Date().getFullYear()} - Built by David J. Crockett - Powered by <a href="https://rawg.io/" target="_blank" rel="noopener noreferrer">rawg.io</a></Card.Footer>
        </Card>
    )
}

export default Footer;