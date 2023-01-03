import React, { Fragment } from "react";
import CardComponent from "./Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchList = ({ popular, upcoming, newGames }) => (
  <>
  <Container fluid>

    <Row>

        <Col className='g-4'>
            <h3>Popular Games</h3>
                <CardComponent games={popular} listofgames />
        </Col>


        <Col className='g-4'>
            <h3>Upcoming Games</h3>
                <CardComponent games={upcoming} listofgames />
        </Col>


        <Col className='g-4'>
            <h3>New Games</h3>
                <CardComponent games={newGames} listofgames />
        </Col>

    </Row>

  </Container>
  </>
);

export default SearchList;