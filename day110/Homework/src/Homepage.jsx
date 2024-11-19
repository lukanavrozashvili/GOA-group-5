import React from "react"

const Homepage = () => {
    const handleClick = () => {
        alert("hello");
    };
    const buttonColor =  {
        backgroundColor: "orange",
        color: "white",
        width:"70px",
        borderRadius:"15px"

    }
    return (
        <div>
            <h1>Welcome This is Mini Website</h1>
            <button onClick={handleClick} style={buttonColor}>Click</button>
        </div>
    )
}

export default Homepage