export function getAllPokemon() {
    return fetch('http://localhost:3000/pokemons')
    .then((res) => {
        if(res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
}

export function getOnePokemon(id) {
    return fetch(`http://localhost:3000/pokemons/${id}`)
    .then((res) => {
        if(res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
}