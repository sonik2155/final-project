import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyrigth">
        <img alt="Pokemon logotype" src="<%=require('../picture/pokeball.svg')%>"></img>
      </p>
    </footer>
  );
}
