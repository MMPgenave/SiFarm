import React from 'react';
import { useContext } from "react";
import { mycontext } from "./DataProvidor";


export function NumberOfDrinks() {
    const context = useContext(mycontext);
    const NumberofDrink = context.info.NumberofDrink;
    
    return (
      <div
        style={{
          width: "12rem",
          position: "absolute",
          right: "2rem",
          top: "6rem",
        }}
        className="NumberofDrink"
      >
        Total Drinks:{NumberofDrink}
      </div>
    );
}

