import React, { useContext, useEffect } from "react";
import { getDetails } from "./../constants";
import { GameDetailsContext } from "../contexts/GameDetailsContext";
import DetailsComponent from "../components/game/Details";
import Container from "react-bootstrap/Container";

function DetailsPage () {
  const game_id = window.location.pathname.split('/')[3];
  const { fetchDetails, setFetchDetails, gameData, setGameData } = useContext(GameDetailsContext);

  useEffect(() => {
    const getDetailsConst = (game_id) => {
      fetch(getDetails(game_id))
        .then(res => res.text())
        .then(text => JSON.parse(text))
        .then(({ data }) => {
          setFetchDetails(true);
          setGameData(data);
        })
        .catch(error => {
          console.error(error);
        });
    };
  
    getDetailsConst(game_id);
  }, [game_id, setFetchDetails, setGameData]);
  

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
