import React from "react";

//w = width, h = height, flex = display  flex, justify-center = justify-content:center,items-center align-items:center
// mx = margin left, margin right
// my = margin top, margin bottom
// bg = background-color, text-center = text-align:center, text-color-...,text-[px,rem,etc]


// 1 davaleba
const  Football = () =>{
    return(
        <div>
            <h1 className="text-orange-600 text-center">Football Teams</h1>
            <div className="flex justify-center items-center">
                <div className="h-[100px] w-[355px] ">
                    <img src="https://thumbs.dreamstime.com/z/vector-emblems-collection-teams-uefa-european-football-championship-logos-soccer-national-part-editable-eps-file-available-221712565.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}


// 2 davaleba

const Film = () => {
    return(
        <div className="w-full h-[155vh] flex justify-center items-center">
            <div>
                <h1 className="text-orange-700 text-center">Favorite Film</h1>
                <br />
                <hr className="w-full"/>
                <h1  className="text-orange-700 text-center">List of episodes. The first season of Prison Break, an American serial drama television series, commenced airing in the United States and Canada on August 29, 2005, on Mondays at 9:00 p.m.</h1>
                <div className="w-full flex justify-center">
                    <img className="h-[300] w-[400px]"  src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/88a4ff867b1d45a1ba6ff4ef2f47fa9eae35c7a402a089d6c4bf9cfac6f77b66._RI_V_TTW_.jpg"/>
                </div>
            </div>
        </div>
    )            
}



// 3 davaleba

const Pigs = () =>{
    return(
        <div className="w-full h-[10vh] flex justify-center items-center">
            <div>
                <h2 className="text-center">Welcome to Pig Paradise!</h2>
                <br />
                <hr className="w-full"/>
                <br />
                <div className="flex gap-10">
                    <img className="h-[300] w-[400px]"   src="https://tse1.mm.bing.net/th?id=OIP.pwih3UHe3-C2AvGz68T7twHaFY&pid=Api&P=0&h=220"/>
                    <img className="h-[300] w-[400px]"  src="https://tse3.mm.bing.net/th?id=OIP.qYwqRHebjPRSAHNIRx5NyAHaEo&pid=Api&P=0&h=220" />
                </div>
            </div>
        </div>
    )
}

// 4 davaleba

const Apples = () =>{
    return(
        <div className="w-full h-[110vh] flex justify-center items-center">
            
            <div>
                <h1 className="text-center">Apple Company</h1><br />
                <br />
                <hr className="w-full"/>
                <br />
                <img className="h-[300] w-[400px]"  src="https://tse4.mm.bing.net/th?id=OIP.DAZvhmzO0sxCp-uWdJBEawHaFa&pid=Api&P=0&h=220"/>
                <div className="flex gap-[2.55rem]">
                    <button className="border-none bg-violet-300 text-white w-[180px] h-[25px] rounded">Purchase</button>
                    <button className="border-none bg-violet-300 text-white w-[180px] h-[25px] rounded">Details</button>
                </div>
            </div>
        </div>
    )
}
export default Football
export {Film}
export {Pigs}
export {Apples}