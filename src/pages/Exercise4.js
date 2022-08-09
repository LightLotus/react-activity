import React from "react";

// const AnimalList = [
//   {
//     name: "dog",
//     id: "001",
//   },
//   {
//     name: "cat",
//     id: "002",
//   },
//   {
//     name: "chicken",
//     id: "003",
//   },
//   {
//     name: "cow",
//     id: "004",
//   },
//   {
//     name: "sheep",
//     id: "005",
//   },
//   {
//     name: "horse",
//     id: "006",
//   },
// ];

const AnimalList = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

function Exercise4() {
  return (
      <ul>
        {AnimalList.map((Animals) => {
          return <li>{Animals}</li>;
        })}
      </ul>
  );
}

export default Exercise4;
