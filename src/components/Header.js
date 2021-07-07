import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">JJ Movie Watchlist</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Watchlist</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                <i class="fas fa-search-plus"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
