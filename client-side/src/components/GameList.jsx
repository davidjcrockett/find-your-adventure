import React, { Fragment } from "react";
import CardComponent from "./Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ListOfGames = ({ popular, upcoming, newGames }) => (
  <>
  <Container>

    <Row>
      <h3>Popular Games</h3>
        <Col>
          <CardComponent games={popular} listofgames />
        </Col>
    </Row>

    <Row>
      <h3>Upcoming Games</h3>
        <Col>
          <CardComponent games={upcoming} listofgames />
        </Col>
    </Row>

    <Row>
      <h3>New Games</h3>
        <Col>
          <CardComponent games={newGames} listofgames />
        </Col>
    </Row>
    </Container>
  </>
);

export default ListOfGames;