import React from "react";
export default function Button({value,level,classwork}){
    return(
        <div>
            <h2>{value}</h2>
            <p>{level}</p>
            <h2>{classwork}</h2>
        </div>
    )
}