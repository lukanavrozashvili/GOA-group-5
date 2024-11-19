import React from "react";
import ButtonBlack from "./Components/Ui/ButtonBlack";
import Homepage from "./homepage";
export default function App(){
  const children = "click"
  return(
    <div>
      <div className="container">
      <Homepage /><br />
      <Button value = {"classwork"} level = {"level110"} homework = "about React!"/>
        <ButtonBlack>{children}</ButtonBlack>
      </div>
    </div>
  )
}