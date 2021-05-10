import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="not-found">
      <aside className="not-found__container">
      <img
        className="not-found__image"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png"
        alt="Page not Found"
      />
      </aside>
      <div>
      <h1 className="not-found__title">Sorry!</h1>
      <p className="not-found__text">
        Either you aren't cool enough to visit this page or it doesn't exist
      </p>
      <Link to="/">
        <button type="button" className="button not-found__button">Now, get back to the app</button>
      </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
