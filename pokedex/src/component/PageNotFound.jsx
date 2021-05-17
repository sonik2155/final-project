import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="not-found">
      <div className="not-found__text-container">
        <h1 className="not-found__title">Sorry! <span>4o4</span></h1>
        <p className="not-found__text">
          Either you aren't cool enough to visit this page or it doesn't exist
        </p>
        <Link to="/">
          <button type="button" className="button not-found__button">
            Now, get back to the app
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
