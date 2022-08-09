import React from "react";

const AnimalList = (prop) => {
  return (
    <div
      style={{ border: "1px solid black", maxWidth: "20vw", padding: "2rem" }}
    >
      {prop.animal}
    </div>
  );
};

export default AnimalList;
