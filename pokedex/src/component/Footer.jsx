import React from "react";
import Pokeball from "../../public/pokemons/pokeball.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyrigth"><img alt='Pokemon logotype' src={Pokeball}></img></p>
    </footer>
  );
}
