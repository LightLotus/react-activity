import React from "react";
import { useState } from "react";

function Exercise6() {
  const [fullName, setFullName] = useState({ fName: "", lName: "" });

  function handleFName(e) {
    setFullName({ ...fullName, fName: e.target.value });
    console.log(fullName.fName);
  }

  function handleLName(e) {
    setFullName({ ...fullName, lName: e.target.value });
    console.log(fullName.lName);
  }

  return (
    <div style={{ margin: "auto", width: 100, display: "block" }}>
      <input
        type="text"
        placeholder="Enter First Name"
        onChange={handleFName}
      />
      <input type="text" placeholder="Enter Last Name" onChange={handleLName} />
      <button
        onClick={() => alert(`Hello, ${fullName.fName} ${fullName.lName}`)}
      >
        Click me
      </button>
    </div>
  );
}

export default Exercise6;
