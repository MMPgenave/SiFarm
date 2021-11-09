import React from 'react';
import { useContext } from "react";
import { mycontext } from "./DataProvidor";


export function NumberOfDrinks() {
    const context = useContext(mycontext);
    const NumberofDrink = context.info.NumberofDrink;
    
    return (
        <div className="text-center mt-3">
            Total Drinks:{NumberofDrink}
        </div>
    )
}

