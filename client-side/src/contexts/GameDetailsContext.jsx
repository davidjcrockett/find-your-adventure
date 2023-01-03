import React, {createContext, useState, useEffect} from 'react';
import { getDetails } from './../constants';

export const GameDetailsContext = createContext();

function DetailsContextProvider ({children}) {
  const game_id = window.location.pathname.split('/')[3];
  const [fetchDetails, setFetchDetails] = useState(false);
  const [details, setDetails] = useState();

  useEffect(() => getDetailsConst(game_id), [game_id]);

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
    <GameDetailsContext.Provider value={{ fetchDetails, details }}>
      {children}
    </GameDetailsContext.Provider>
  )
}

export default DetailsContextProvider;