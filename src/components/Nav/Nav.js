import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-nav sticky-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
             <a style={{fontSize:"35px",color:"aqua"}} className="navbar-brand">
               BONSAI
             </a>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <Link style={{textDecoration:"none"}} to="/shop">
               <li className="nav-item">
                  <a className="nav-link active navs-link" aria-current="page">
                   Shop
                  </a>
                </li>
            </Link>
            <Link style={{textDecoration:"none"}} to="/OrderReview">
               <li className="nav-item">
                  <a className="nav-link active navs-link" aria-current="page">
                    OrderReview
                  </a>
                </li>
            </Link>
            <Link style={{textDecoration:"none"}} to="/inventory">
               <li className="nav-item">
                  <a className="nav-link active navs-link" aria-current="page">
                    Manage Inventory
                  </a>
                </li>
            </Link>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
