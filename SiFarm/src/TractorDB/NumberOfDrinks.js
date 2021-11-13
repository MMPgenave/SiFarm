import React from "react";
import { useContext } from "react";
import { mycontext } from "./DataProvidor";

export function NumberOfDrinks() {
  const context = useContext(mycontext);
  const NumberofDrink = context.info.NumberofDrink;

  return (
    <div
      className="container shadow"
      style={{
        
        color: "#826a22",
        "letter-spacing":".1rem"
      }}
      className="NumberofDrink"
    >
      Total Drinks: {NumberofDrink}
    </div>
  );
}
