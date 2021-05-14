import React from "react";
import { useParams, Link } from "react-router-dom";

function PokemonPage({ caugthPokemons, pokemons }) {
  let { id } = useParams();
  const pokemon = pokemons.find(pokemon => pokemon.id ==  id)

  return (
        <section className="pokemon">
          <Link className='pokemon__link' to='/'><button className="pokemon__btn-back" type="button">
          Back
        </button></Link>
        <div className="pokemon__container">
          <img
            className="pokemon__picture"
            alt='pokemon'
            src={`../../pokemons/${pokemon.id}.png`}
          />
          <div className="pokemon__parameters">
          <h1 className="pokemon__name">
            Name: <span>{pokemon.name}</span>
          </h1>
          <h2 className="pokemon__date">Date: {caugthPokemons.date}</h2>
          <p className="pokemon__identificator">
            ID: <span>{pokemon.id}</span>
          </p>
          { <p className="pokemon__status">Status : <span>{caugthPokemons.status? caugthPokemons.status : 'Not Caught yet'}</span></p> }
          </div>
        </div>
        </section>
  );
}

export default PokemonPage;
