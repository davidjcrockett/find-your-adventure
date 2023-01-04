import { createContext, useState, useEffect } from 'react';
import { getDetails } from './../constants';

export const GameDetailsContext = createContext();

const DetailsContextProvider = ({ children }) => {
  // id
  const game_id = window.location.pathname.split('/')[3];

  const [fetchDetails, setFetchDetails] = useState(false);
  const [gameData, setGameData] = useState();

  useEffect(() => {
    const getDetailsConst = (game_id) => {
      fetch(getDetails(game_id))
        .then(res => {
          console.log(res);
          return res.text();
        })
        .then(text => {
          console.log(text);
          return JSON.parse(text);
        })
        .then(({ data }) => {
          setFetchDetails(true);
          setGameData(data);
        })
        .catch(error => {
          console.error(error); // log the error message
        });
    };
    

    getDetailsConst(game_id);
  }, [game_id]);

  return (
    <GameDetailsContext.Provider value={{ fetchDetails, setFetchDetails, gameData, setGameData }}>
      {children}
    </GameDetailsContext.Provider>
  );
  
};

export default DetailsContextProvider;
