export default function PokemonDate() {
    let data = new Date();
    let today = ([data.getDate(), ('0' + (data.getMonth() + 1)), data.getFullYear()]).join('.');
    return today;
};

export const POKEMONS_PAGE = 20;