import React, { useContext } from "react";

import { GameDetailsContext } from "../contexts/GameDetailsContext";
import DetailsComponent from "../components/game/Details";

import Spinner from "react-bootstrap/Spinner";

function DetailsPage () {
    const {
      fetchDetails,
      gameDetails,
    } = useContext(GameDetailsContext);
    return (
      <>
        { fetchDetails && gameDetails ? (
          <>
            <DetailsComponent
              gameDetails={gameDetails}
            />
          </>
        ) : (
            <Spinner animation="border" size='xl' role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
        )}
      </>
    );
  };

export default DetailsPage;