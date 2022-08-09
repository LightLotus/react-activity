import React from "react";
import AnimalList from "./AnimalList";
const AnimalArr = ["dog 🐶", "cat 🐱", "chicken 🐔", "cow 🐮", "sheep 🐑", "horse 🐴"];

function Exercise5() {
  return (
    <div>
      {AnimalArr.map((Animals) => {
        return <AnimalList animal={Animals} />;
      })}
    </div>
  );
}

export default Exercise5;