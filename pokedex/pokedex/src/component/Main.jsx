import React from "react";
import Card from "./Card";
import { POKEMONS_PAGE} from '../utils/constants';
import { Link, useRouteMatch } from 'react-router-dom';

function Main({ pokemons, page }) {
 const statrIndex = (page - 1) * POKEMONS_PAGE;
 const selectedPokemons = pokemons.slice(statrIndex, statrIndex + POKEMONS_PAGE);
 let {path} = useRouteMatch();

 function handleClick(e) {
   e.preventDefault();
  e.target.disabled = true
  
 };
 

  return (
    <main className="main">
      <section className="elements">
        <p className="elements__count">{page}</p>
        <ul className="element">
          {selectedPokemons.map((card, i) => (
            <li className="element__card" key={card.id}>
              <div className="element__container">
        <Link to={`${path}/${card.id}`}><img className='element__pic' src={`./pokemons/${card.id}.png`} alt={card.name}/></Link>
        <h2 className="element__title">{card.name}</h2>
        <button type='submit' onClick={handleClick} aria-label='Catch pokemon' className='element__button'>Catch</button>
      </div>
              {/* <Card 
              element={card} 
             /> */}
            </li> 
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;