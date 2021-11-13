import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { mycontext } from "./DataProvidor";
import { Link } from "react-router-dom";
import { NumberOfDrinks } from "./NumberOfDrinks"; 

export function NavbarBootstrap() {
   const context = useContext(mycontext);
   const dispatch = context.action;
   const [value, setValue] = useState("");
   const searchValue = React.useRef("");

   React.useEffect(() => {
     searchValue.current.focus();
   }, []);
   const changeHandler = (e) => {
     // console.log(e.target.value);
     dispatch({ type: "search", value: e.target.value });
     setValue(e.target.value);
   };
  return (
    <div>
      <nav class=" navbar navbar-expand-lg navbar-light  bg-primary  p-3 mb-1 bg-body rounded ">
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
              <Link class="nav-link ms-4 " to="/About">
                Forum
              </Link>
              <Link class="nav-link ms-4 " to="/About">
                Contact
              </Link>
            </div>

            <form
              class="d-flex  ms-auto"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >

              <input
                class="form-control me-2"
                name="name"
                type="search"
                placeholder="Search your drink "
                aria-label="Search"
                ref={searchValue}
                onChange={changeHandler}
                value={value}
              />

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
