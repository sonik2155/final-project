import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
import context from "../utils/context";

function Card({ card, onPageOpen, onUpdatePokemon }) {
const currentPokemon = useContext(context);
const [iscaught, setIsCaught] = useState(false)

  useEffect(() => {
    setIsCaught(currentPokemon.status)
  }, [])

  function handleClick(e) {
    e.target.textContent = 'Caught';
    setIsCaught(!iscaught)
    onUpdatePokemon({
      status: 'isCaught',
    })
  }

  function handlePageOpen() {
    onPageOpen(card);
  }

  return (
    <>
      <div className="element__container">
        <img
          onClick={handlePageOpen}
          className="element__pic"
          src={`./pokemons/${card.id}.png`}
          alt={card.name}
        />
        <h2 className="element__title">{card.name}</h2>
        <button
          type='button'
          aria-label="Catch pokemon"
          onClick={handleClick}
          disabled={iscaught}
          className="element__button"
        >
          Catch
        </button>
       <Link to={`pokemons/${card.id}`}><button>Go</button></Link> 
      </div>
    </>
  );
}

export default Card;
