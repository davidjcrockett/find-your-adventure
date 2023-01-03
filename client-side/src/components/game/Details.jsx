import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import parse from 'html-react-parser';
// import Image from 'react-bootstrap/Image';

function DetailsComponent ({gameDetails}) {
    const {
      name,
      description,
      released,
    //   background_image,
    //   rating,
      platforms,
      publishers,
      genres,
    } = gameDetails;

    return (
        <>
        <Container fluid>

            <Row>
                <Col className='g-4'>
                    <h1>{name}</h1>
                    <p>Release date: {released}</p>
                </Col>
                {/* <Col>
                <Image src={background_image}
                />
                </Col> */}
            </Row>

            <Row>
                <Col className='g-4'>
                    <h3>Publisher: {publishers}</h3>
                    <h3>Genre(s): {genres}</h3>
                    <h3>Platform(s): {platforms}</h3>
                </Col>

                {/* <Col className='g-4'>
                    <h3>Rating: {rating}</h3>
                </Col> */}
            </Row>

            <Row>
                <Col className='g-4'>
                    <h4>Description: {parse(description)}</h4>
                </Col>
            </Row>

        </Container>
        </>
    )
};

export default DetailsComponent;

