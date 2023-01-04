import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DetailsComponent ({ gameDetails }) {
    const { title, release_date, developers, publishers, background_image } = gameDetails;
  
  console.log(gameDetails);

    return (
        <>
        <Container fluid>

            <Row>
                <Col className='g-4'>
                    <h1>{title}</h1>
                    <p>Released on: {release_date}</p>
                    <p>Developed by: {developers.join(', ')}</p>
                    <p>Published by: {publishers.join(', ')}</p>
                    <img src={background_image} alt={`${title} background`} />

                </Col>
            </Row>

        </Container>

        </>
    )
};


export default DetailsComponent;
