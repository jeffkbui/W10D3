import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";

function Root() {
  return(
    <div>
      <Game />
    </div>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});