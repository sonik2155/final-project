import React from 'react';
import {Link, useParams} from 'react-router-dom';

 function PokemonPage({pokemons}) {
    let { id } = useParams();

   const pokemon = pokemons.find(pok => pok.id === id)
console.log(pokemon)
    return (
<section className='pokemon'>
<Link to='/'><button className='pokemon__btn-back' type='button'></button></Link> 
<div className='pokemon__container'>
<img className='pokemon__picture' alt='' src=''/>
<h1 className='pokemon__name'>Name:  </h1>
<h2 className='pokemon__date'>Date: </h2>
<p className='pokemon__identificator'>ID: {id}</p>

</div>
</section>
    )
};

export default PokemonPage;