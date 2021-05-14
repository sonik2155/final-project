import React from "react";
import { Link } from "react-router-dom";

function CaughtPokemons({ pokemons }) {
  const filterPokemon = pokemons.filter((pokemon) => pokemon.status);

  return (
    <section className="elements">
        <h2 className="elements__title">My Pokedex</h2>
      <ul className="element">
        {filterPokemon.map((pokemon, i) => (
          <li className="element__card" key={pokemon.id}>
            <div className="element__container">
              <img
                className="element__pic"
                src={`./pokemons/${pokemon.id}.png`}
                alt={pokemon.name}
              />
              <h2 className="element__title">{pokemon.name}</h2>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CaughtPokemons;
