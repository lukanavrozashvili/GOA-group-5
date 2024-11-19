import React from "react";
import Button from "./Components/Button";
import ButtonBlack from "./Components/Ui/ButtonBlack";
export default function App(){
  const children = "click"
  return(
    <div>
      <div className="container">
        <Button value = {"classwork"} level = {"level110"} classwork = "about React!"/>
        <ButtonBlack>{children}</ButtonBlack>
      </div>
    </div>
  )
}