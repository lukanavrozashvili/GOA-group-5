// Class Work
// import React, { useState } from "react";
// // rafce
// const App = () => {
//   let arr = ["brdzola kodistvis!", "virusebi"]
//    // current      update
//   const [clintEastWood,setClintEastWood] = useState(0)
  
//   return ( 
//     <div>
//       <h1>hello {5 + 1}</h1>
//       <div>
//         {arr.map((item,index) => (
//           <p key={`_names-${index}`}>{item}</p>
//         ))}
//       </div>
//       <div>{clintEastWood}</div>
//       <button onClick={() => setClintEastWood(clintEastWood + 1)}>Click</button>
//     </div>
//   )
// }
// export default App




// homework davaleba
import React, { useState } from "react";

const App = () =>{
    let arrMovieNames = ["The GodFather","Rambo","Rush Hour", "Dumb & Dumber", "Druken Master"]
    const arrNav = ["About", "Contacts", "Services", "Portfolio", "Blog"]
    const [counter,setCounter] = useState(0)
    return(
      <div>
        <div class = "movie">
          {arrMovieNames.map((item,index) => (
            <li key={`_names-${index}`}>{item}</li>
          ))}
        </div><br/>
          <div class = "nav">
            {arrNav.map((item,index) =>(
              <p key={`_names-${index}`}>{item}</p>
            ))}
          </div><br/>
        <div class = "counter">{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>Click</button>
      </div>
        
    )
}

export default App