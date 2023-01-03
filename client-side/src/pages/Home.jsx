import React, { useContext } from 'react'
import SearchBar from '../components/general/Search';
import CardComponent from '../components/game/Card';
import ListOfGames from '../components//game/GameList';
import { ListContext } from '../contexts/ListContext';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';


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
        validateQGame
    } = useContext(ListContext);
    return ( 
        <>
        <br />
        
        <SearchBar validateQGame={validateQGame} />
        
        <Container>

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
                    <Spinner animation="border" size='xl' role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    )
                ) : search.length ? (
                    <CardComponent games={search} />
                ) : (
                    <p>No results found...</p>
                    )}

        </Container>
        </>
      );
    };

    export default Home;