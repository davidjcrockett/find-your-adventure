import React, { createContext, useState, useEffect } from 'react';
import { getPopular, getUpcoming, getNew, getDetails } from '../constants';

export const ListContext = createContext();

function ListContextProvider () {
    const game_id = window.location.pathname.split('/')[3];
    const [fetchPopular, setFetchPopular] = useState(false);
    const [fetchUpcoming, setFetchUpcoming] = useState(false);
    const [fetchNew, setFetchNew] = useState(false);
    const [fetchDetails, setFetchDetails] = useState(false);
    const [fetchSearch, setFetchSearch] = useState(false);

    const [popular, setPopular] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [newGames, setNew] = useState([]);
    const [details, setDetails] = useState('');
    const [search, setSearch] = useState([]);
  
    useEffect(() => getPopularConst(), []);
    useEffect(() => getUpcomingConst(), []);
    useEffect(() => getNewConst(), []);
    useEffect(() => getDetailsConst(game_id), [game_id]);
  
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

    const getDetailsConst = (game_id) => {
        fetch(getDetails(game_id))
          .then(res => res.json())
          .then(data => {
            setFetchDetails(true);
            setDetails(data)
          })
          .catch(error => console.log(error));
        }
  
    return (
      <ListContext.Provider value={{fetchPopular, fetchUpcoming, fetchNew, fetchDetails, fetchSearch, popular, upcoming, newGames, details, search}}>
      </ListContext.Provider>
    )
  }

  export default ListContextProvider;