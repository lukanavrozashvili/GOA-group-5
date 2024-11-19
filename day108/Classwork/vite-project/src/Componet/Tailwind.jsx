import React from "react";

//w = width, h = height, flex = display  flex, justify-center = justify-content:center,items-center align-items:center
// mx = margin left, margin right
// my = margin top, margin bottom
// bg = background-color, text-center = text-align:center, text-color-...,text-[px,rem,etc]
const TailWind = () =>{
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="mx-[1rem]  bg-orange-600 w[30px] h-[11.5rem] p-2">
                <div className="bg-blue-600 w-[5.5rem] h-[5.5rem] bg-slate-500/80  my-[2.5rem] mx-[2rem]">
                    <p className="text-center text-blue-500 text-[1rem]">group 05</p>
                </div>
            </div>
        </div>
    )
}
export default TailWind