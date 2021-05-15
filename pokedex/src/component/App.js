import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";
import PokemonPage from "./PokemonPage";
import PageNotFound from "./PageNotFound";
import CaughtPokemons from "./CaughtPokemons";
import Pagination from "./Pagination";
import { POKEMONS_PAGE, amountPage } from "../utils/constants";
import { Route, Switch } from "react-router-dom";
import { getAllPokemon, patchPokemon } from "../utils/utils";
import Context from "../utils/context";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [context, setContext] = useState(false);
  const [caugthPokemons, setcaugthPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getAllPokemon()
      .then((res) => setPokemons(res))
      .catch((err) => console.log(err));

    setTotalPages(Math.ceil(pokemons.length / POKEMONS_PAGE));
  }, [pokemons.length]);

  function patchPokemonRes(item) {
    patchPokemon({
      status: item.status,
      id: item.id,
    })
      .then((res) => {
        setContext(res);
        console.log(res);
        setcaugthPokemons(res);
      })
      .catch((err) => console.log(err));
  }

  function handleClick(number) {
    setPage(number);
  }


  return (
    <div className="page">
      <Context.Provider value={context}>
        <Route>
          <Header />
        </Route>
        <Switch>
          <Route exact path="/">
            <Main
              pokemons={pokemons}
              page={page}
              onUpdatePokemon={patchPokemonRes}
            />
            <Pagination totalPages={totalPages} handleClick={handleClick} />
          </Route>
          <Route path="/pokemon/:id">
            <PokemonPage caugthPokemons={caugthPokemons} pokemons={pokemons} />
          </Route>
          <Route path="/CaughtPokemons">
            <CaughtPokemons 
            pokemons={pokemons}/>
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
