import React, { useContext, useEffect } from "react";
import { GameDetailsContext } from "../contexts/GameDetailsContext";
import DetailsComponent from "../components/game/Details";
import Container from "react-bootstrap/Container";
import { useParams } from 'react-router-dom';

const getDetails = game_id => `https://api.rawg.io/api/games/${game_id}?key=${process.env.REACT_APP_API_KEY}`;

function DetailsPage () {
  const { id } = useParams();
  const { fetchDetails, setFetchDetails, gameData, setGameData } = useContext(GameDetailsContext);

  useEffect(() => {
    const getDetailsConst = (game_id) => {
      fetch(getDetails(game_id))
        .then(res => res.text())
        .then(text => {
          // console.log(text);
          return JSON.parse(text);
        })
        .then (parsedResponse => {
          // console.log(parsedResponse);
            setFetchDetails(true);
            setGameData(parsedResponse);
        })
        .catch(error => {
          console.log(error);
        });
    };
  
    getDetailsConst(id);
  }, [id, setFetchDetails, setGameData]);


  return (
    <Container>
      { fetchDetails && gameData ? (
        <DetailsComponent
          gameDetails={gameData}
        />
      ) : gameData === undefined ? (
        <p>Loading...</p>
      ) : (
        <p>Something went wrong</p>
      )}
    </Container>
  );
};

export default DetailsPage;
