import React, { useContext } from 'react'
import SearchBar from '../components/Search';
import CardComponent from '../components/Card';
import ListOfGames from '../components/GameList';
import { ListContext } from '../contexts/ListContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home () {
    const {
        fetchPopular, 
        fetchUpcoming, 
        fetchNew, 
        fetchSearch, 
        popular, 
        upcoming, 
        newGames, 
        search, 
        validate
    } = useContext(ListContext);
    return ( 
        <>
        <SearchBar validate={validate} />
        
        <Container>
            <Row>
                <Col>
                    {!fetchSearch ? (
                    fetchPopular &&
                    fetchUpcoming &&
                    fetchNew ? (
                        <ListOfGames
                            popular={popular}
                            upcoming={upcoming}
                            newGames={newGames}
                        />
                    ) : (
                    <p>Loading, please wait</p>
                    )
                ) : search.length ? (
                    <CardComponent games={search} />
                ) : (
                    <p>No results found...</p>
                    )}
                </Col>
            </Row>
        </Container>
        </>
      );
    };

    export default Home;