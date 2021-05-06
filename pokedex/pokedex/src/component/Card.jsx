import React from "react";
import { Link, useRouteMatch } from 'react-router-dom';

function Card({ element }) {
  let {path} = useRouteMatch()
  
  const card = {
  name: element.name,
  id: element.id,
  }

  return (
    <>
      <div className="element__container">
        <Link to={`${path}/${element.id}`}><img className='element__pic' src={`./pokemons/${card.id}.png`} alt={card.name}/></Link>
        <h2 className="element__title">{card.name}</h2>
        <button aria-label='Catch pokemon' className='element__button'>Catch</button>
      </div>
    </>
  );
}

export default Card;