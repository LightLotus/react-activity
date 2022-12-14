import React, { useState } from "react";

const Exercise3 = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count * 2)}>Click me</button>
    </div>
  );
};

export default Exercise3;