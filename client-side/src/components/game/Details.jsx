import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import parse from 'html-react-parser';
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';

function DetailsComponent ({ gameDetails }) {
    const { name, description, released, background_image, platforms, publishers, genres } = gameDetails;

    const styles = {
        image: {
            padding: '2rem 0rem 2rem 0rem'
        },
        button: {
            padding: '1rem 4rem 1rem 4rem'
        }
    }

    return (
        <>
        <Container fluid>
            <Row>
                <Col className='g-4'>
                    <h1>{name}</h1>
                    <h6>Release Date: {released}</h6>
                    <h3>Publishers</h3>
                    <ul>
                        {publishers.map((publisher) => (
                            <li key={publisher.id}>{publisher.name}</li>
                        ))}
                    </ul>

                    <h3>Genres</h3>
                    <ul>
                        {genres.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>

                    <h3>Platforms</h3>

                    <ul>
                        {platforms.map((platform) => (
                            <li key={platform.platform.id}>{platform.platform.name}</li>
                        ))}
                    </ul>

                    
                </Col>

                <Col>
                <Image className="img-fluid" src={background_image} style={styles.image} alt={`${name} background`} />
                <Button style={styles.button} variant='dark'>Add to Bookmarks</Button>
                </Col>
            </Row> 

            <Row>
                <Col>
                <h3>Description</h3>
                <span>{parse(description)}</span>
                </Col>
            </Row>

        </Container>

        </>
    )
};


export default DetailsComponent;