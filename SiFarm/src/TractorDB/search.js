import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { mycontext } from "./DataProvidor";
import { NumberOfDrinks } from "./NumberOfDrinks"; 

export function Search() {
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
    <>
      <div className="input-group-lg rounded   ">
        <div className="mx-auto d-flex " >
          <form
            
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="search"
              name="name"
              className="form-control rounded"
              placeholder="Search your drink"
              aria-label="Search"
              aria-describedby="search-addon"
              ref={searchValue}
              onChange={changeHandler}
              value={value}
            />
          </form>

          <span
            class="input-group-text bg-transparent border-0"
            id="search-addon"
          >
            <i class="fa fa-search"></i>
          </span>
        </div>
      </div>
      <NumberOfDrinks />
    </>
  );
}
