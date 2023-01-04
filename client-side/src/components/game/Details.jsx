import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import parse from 'html-react-parser';

function DetailsComponent ({ gameDetails }) {
    const { name, description, released, background_image } = gameDetails;

    return (
        <>
        <Container fluid>

            <Row>
                <Col className='g-4'>
                    <img src={background_image} alt={`${name} background`} />
                    <h1>{name}</h1>
                    <p>{parse(description)}</p>
                    <p>Released on: {released}</p>
                </Col>
            </Row>

        </Container>

        </>
    )
};


export default DetailsComponent;
