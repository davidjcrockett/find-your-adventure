import React, { createContext, useState, useEffect } from 'react';
import { getPopular, getUpcoming, getNew, getSearch } from '../constants';

export const ListContext = createContext();

function ListContextProvider ({children}) {
    // Fetch
    const [fetchPopular, setFetchPopular] = useState(false);
    const [fetchUpcoming, setFetchUpcoming] = useState(false);
    const [fetchNew, setFetchNew] = useState(false);
    const [fetchSearch, setFetchSearch] = useState(false);

    // Returns
    const [popular, setPopular] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [newGames, setNew] = useState([]);
    const [search, setSearch] = useState([]);
    const [currentQ, setCurrentQ] = useState('');
  
    useEffect(() => getPopularConst(), []);
    useEffect(() => getUpcomingConst(), []);
    useEffect(() => getNewConst(), []);
  
    const getPopularConst = () => {
      fetch(getPopular())
        .then(res => res.json())
        .then(data => {
          setFetchPopular(true);
          setFetchSearch(false);
          setPopular(data.results)
        })
        .catch(error => console.log(error));
    }

    const getUpcomingConst = () => {
      fetch(getUpcoming())
        .then(res => res.json())
        .then(data => {
          setFetchUpcoming(true);
          setFetchSearch(false);
          setUpcoming(data.results)
        })
        .catch(error => console.log(error));
    }

    const getNewConst = () => {
      fetch(getNew())
        .then(res => res.json())
        .then(data => {
          setFetchNew(true);
          setFetchSearch(false);
          setNew(data.results)
        })
        .catch(error => console.log(error));
    }

    const getSearchedConst = (q_game) => {
      fetch(getSearch(q_game))
        .then(res => res.json())
        .then(data => {
          setFetchSearch(true);
          setSearch(data.results)
        })
        .catch(error => console.log(error));
    }
  
    const validateQGame = (e) => {
      let q_game = e.target.value.toLowerCase().trim();
      if(e.type === 'keypress' && e.key === 'Enter') {
        if(q_game && q_game !== currentQ) {
          setCurrentQ(q_game);
          setFetchPopular(false);
          setFetchUpcoming(false);
          setFetchNew(false);
          getSearchedConst(q_game);
        }
      }
    }

  
    return (
      <ListContext.Provider value={{fetchPopular, fetchUpcoming, fetchNew, fetchSearch, popular, upcoming, newGames, search, validateQGame}}>
        {children}
      </ListContext.Provider>
    )
  }

  export default ListContextProvider;