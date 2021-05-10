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
import { getAllPokemon, patchPokemon } from "../utils/utils";
import Context from '../utils/context';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [context, setContext] = useState(false)
  const [caugthPokemons, setcaugthPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [openPokemonPage, setOpenPokemonPage] = useState(false);
  const [selectedCard, setSelectedCards] = useState({
    openPokemonPage: false,
  });

  function setupCards(pokemons) {
    setPokemons(
      pokemons.map((item) => ({
        name: item.name,
        id: item.id,
      }))
    );
  };

  useEffect(() => {
    getAllPokemon()
      .then((res) => setupCards(res))
      .catch((err) => console.log(err));

    setTotalPages(Math.ceil(pokemons.length / POKEMONS_PAGE));
  }, [pokemons.length]);

  function handleClick(number) {
    setPage(number);
  }

  function handlePagePokemonOpen(item) {
    setSelectedCards(item);
    setOpenPokemonPage(true);
  }

  function handleClosePokemonPage() {
    setOpenPokemonPage(false);
  }

  useEffect(() => {
    function handleEscClose(event) {
      if (event.key === "Escape") {
        handleClosePokemonPage();
      }
    }
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  });

 function patchPokemonRes(item) {
   patchPokemon({
     status: item.status,
   }).then((res) => {
    setContext(res)
    console.log(res)
    setcaugthPokemons(res) 
   }).catch(err => console.log(err))
 };

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
            allPokemons={pokemons.length}
            page={page}
            onPageOpen={handlePagePokemonOpen}
            onUpdatePokemon={patchPokemonRes}
          />
          <Pagination 
          totalPages={totalPages} 
          handleClick={handleClick} />
        </Route>
        <Route path="/pokemons/:id">
          <CaughtPokemons 
          pokemons={pokemons}
          />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
      <PokemonPage
        selectedCard={selectedCard}
        openPokemonPage={openPokemonPage}
        onClose={handleClosePokemonPage}
        caugthPokemons={caugthPokemons}
      />
      </Context.Provider>
    </div>
  );
}

export default App;
