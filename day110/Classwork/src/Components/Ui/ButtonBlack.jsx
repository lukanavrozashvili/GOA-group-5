import React from "react";

export default function ButtonBlack({children}){
    return(
        <button className="bg-black text-white rounded-sm  hover:bg-black/100 hover:text-orange-500 transition-all delay-150 w-[100px]">
            {children}
        </button>
    )
}