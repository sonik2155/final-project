import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import PokemonPage from "./PokemonPage";
import PageNotFound from "./PageNotFound";
import Pagination from "./Pagination";
import CaughtPokemons from "./CaughtPokemons";
import { POKEMONS_PAGE } from "../utils/constants";
import { Route, Switch } from "react-router-dom";
import { getAllPokemon, getOnePokemon } from "../utils/actions";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    getAllPokemon()
    .then(res => setPokemons(res))
    .catch(err => console.log(err))

    setTotalPages(Math.ceil(pokemons.length / POKEMONS_PAGE))
  }, [pokemons.length]);

  const handleClick = (number) => {
    setPage(number)
  }

  return (
    <div className="page">
        <Route>
          <Header />
        </Route>
        <Route path='/CaughtPokemons'>
          <CaughtPokemons />
        </Route>
        <Switch>
          <Route exact path='/'>
            <Main 
            pokemons={pokemons}
            allPokemons={pokemons.length}
            page={page} />
            <Pagination 
             totalPages={totalPages}
             handleClick={handleClick}/>
          </Route>
          <Route path='/PokemonPage/:id'>
            <PokemonPage 
            pokemons={pokemons}
            />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
  );
}

export default App;
