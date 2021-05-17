import React from "react";
import Card from "./Card";
import { POKEMONS_PAGE } from "../utils/constants";

function Main({ pokemons, page, onUpdatePokemon }) {
  const statrIndex = (page - 1) * POKEMONS_PAGE;
  const selectedPokemons = pokemons.slice(
    statrIndex,
    statrIndex + POKEMONS_PAGE
  );

  return (
    <main className="main">
      <section className="elements">
        <p className="elements__count">{page}</p>
        <ul className="element">
          {selectedPokemons.map((card, i) => (
            <li className="element__card" key={card.id}>
              {<Card card={card} onUpdatePokemon={onUpdatePokemon} />}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
