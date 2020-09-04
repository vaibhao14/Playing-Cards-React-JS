import React from "react";
import "./App.css";
import Card from "./card";

function App() {
  const cardNums = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const type = {
    spade: <div>&#9824;</div>,
    heart: <div>&#9829;</div>,
    clubs: <div>&#9827;</div>,
    diamonds: <div>&#9830;</div>,
  };

  const redColor = {
    color: "red",
  };

  const blackColor = {
    color: "black",
  };

  return (
    <div className="App">
      {cardNums.map((num) => (
        <div>
          <Card num={num} type={type.spade} color={blackColor} />
          <Card num={num} type={type.heart} color={redColor} />
          <Card num={num} type={type.clubs} color={blackColor} />
          <Card num={num} type={type.diamonds} color={redColor} />
        </div>
      ))}
    </div>
  );
}

export default App;
