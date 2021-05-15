import PokemonDate from '../utils/constants';

export function getAllPokemon() {
    return fetch('http://localhost:3000/pokemons', {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000/pokemons',
            'Access-Control-Allow-Headers': "*"
        }
    })
    .then((res) => {
        if(res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
};

export function patchPokemon({status, id}) {
    return fetch(`http://localhost:3000/pokemons`, {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            status: status,
            date: PokemonDate(),
            id: id, 
        }),
    }).then((res) => {
        if(res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
};

