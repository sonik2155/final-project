import React from "react";
import { NavLink, Route } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__navigation">
        <NavLink
          to="/"
          activeClassName="header__link_active"
          className="header__link"
          aria-label="Main page"
        >
          Main
        </NavLink>
        <NavLink
          to="/CaughtPokemons"
          activeClassName="header__link_active"
          className="header__link"
          aria-label="Caught pokemons"
        >
          Сaught pokemons
        </NavLink>
      </nav>
    </header>
  );
}
