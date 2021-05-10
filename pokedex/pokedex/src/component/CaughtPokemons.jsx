import React from "react";
import { useParams } from "react-router-dom";

function CaughtPokemons({ pokemons }) {
let { id } = useParams;

    return (
<><div>{pokemons.filter(pokemon => pokemon.id === id).map((pokemon, i) => {
    <div key={i}>
        <h1>{pokemon.name}</h1>
    </div>
})}</div></>
    )
};

export default CaughtPokemons;