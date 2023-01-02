import React, { useContext } from 'react'
import { ListContext } from '../contexts/ListContext';

function Home () {
    const {
        fetchPopular, 
        // fetchUpcoming, 
        // fetchNew, 
        // fetchSearch, 
        // fetchDetails, 
        popular, 
        // upcoming, 
        // newGames, 
        // search, 
        // details
    } = useContext(ListContext);
    return ( 
        <>
          <h1>Home</h1>
          {fetchPopular ? 
            (popular.map(game => (
              <p>{game.name}</p>
            )))
            :
            <p>Loading, please wait</p>
          }
        </>
      );
    };

    export default Home;