import React from "react";
export default function Button({value,level,homework}){
    return(
        <div>
            <h2>{value}</h2>
            <p>{level}</p>
            <h2>{homework}</h2>
        </div>
    )
}