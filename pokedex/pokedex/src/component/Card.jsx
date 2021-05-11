import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import context from "../utils/context";

function Card({ card, onUpdatePokemon }) {
const currentPokemon = useContext(context);
const [iscaught, setIsCaught] = useState(false);

  useEffect(() => {
    setIsCaught(currentPokemon.status)
  }, [currentPokemon.status]);

  function handleClick(e) {
    e.target.textContent = 'Caught';
    setIsCaught(!iscaught)
    onUpdatePokemon({
      status: 'isCaught',
    })
  };

  return (
      <div className="element__container">
      <Link to={`/pokemon/${card.id}`}>
        <img
          className="element__pic"
          src={`./pokemons/${card.id}.png`}
          alt={card.name}
          /> 
        </Link> 
        <h2 className="element__title">{card.name}</h2>
        <button
          type='button'
          aria-label="Catch pokemon"
          onClick={handleClick}
          disabled={iscaught}
          className="element__button">
          Catch
        </button>
      </div>
  );
}

export default Card;
