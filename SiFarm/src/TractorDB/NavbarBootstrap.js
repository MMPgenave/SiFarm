import React from "react";
import { Link } from "react-router-dom";

export function NavbarBootstrap() {
  return (
    <div>
      <nav class=" navbar navbar-expand-lg navbar-light  bg-primary  p-3 mb-5 bg-body rounded ">
        <div class="container-fluid ">
          <a
            class="navbar-brand ms-3"
            style={{ "font-size": "xx-large" }}
            href="/"
          >
            CocktailDB
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse ms-5  " id="navbarNavAltMarkup">
            <div class="navbar-nav  ">
              <Link class="nav-link active ms-4 " aria-current="page" to="/">
                Home
              </Link>
              <Link class="nav-link ms-4 " to="/About">
                About
              </Link>
            </div>
            <form class="d-flex  ms-auto">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
              <span
                class="input-group-text bg-transparent border-0"
                id="search-addon"
              >
                <i class="fa fa-search"></i>
              </span>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
