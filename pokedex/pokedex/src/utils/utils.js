export function getAllPokemon() {
    return fetch('http://localhost:3000/pokemons')
    .then((res) => {
        if(res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
};

export function patchPokemon({status}) {
    return fetch(`http://localhost:3000/pokemons`, {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            status: status,
            //date: new Date(Date.now())
        }),
    }).then((res) => {
        if(res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
};

