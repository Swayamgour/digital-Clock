import React  , {useState} from "react";
import "./style.css";

export default function App() {
  let time = new Date().toLocaleTimeString();
   const [x,setX]= useState()

  

  const newTime = ()=>{
    // let time = new Date().toLocaleTimeString();
    setX(time)
  }

  setInterval(newTime , 1000)
  return (


    <div>
      <h1>Hello StackBlitz! </h1>
      <p>Start editing to see some magic happen :)</p>


      <h1 className="h2">{time}</h1>
    </div>
  );
}
