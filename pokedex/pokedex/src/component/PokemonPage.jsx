import React from "react";

function PokemonPage({ selectedCard, openPokemonPage, onClose }) {

    
  return (
    <>
      <div className={`pokemon ${openPokemonPage && "pokemon_is-open"}`}>
        <button className="pokemon__btn-back" onClick={onClose} type="button">
          Back
        </button>
        <div className="pokemon__container">
          <img
            className="pokemon__picture"
            alt={selectedCard.name}
            src={`./pokemons/${selectedCard.id}.png`}
          />
          <div className="pokemon__parameters">
          <h1 className="pokemon__name">
            Name: <span>{selectedCard.name}</span>
          </h1>
          <h2 className="pokemon__date">Date: {}</h2>
          <p className="pokemon__identificator">
            ID: <span>{selectedCard.id}</span>
          </p>
          <p className="pokemon__status">Status : <span>{}</span></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonPage;
