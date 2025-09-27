import { useState } from "react";

// * hooks -> móc

const App = () => {
  // console.log(document.title);
  // document.title = 0;

  // let count = 0;

  const [count, setCount] = useState(0);

  console.log(count);
  function increment() {
    setCount((count) => count + 1); // Cach 1
    setCount(count + 1); // Cach 2
    // setCount(count++); // Cach 3: Sai -> Không nên trực tiếp thay đổi value của state
    console.log(count);
  }
  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => (document.title = 100)}>Click Me</button>
      <button onClick={increment}>Increment</button>
      <p style={{ color: "red", fontSize: "30px" }}>{count}</p>
    </>
  );
};

export default App;

//*  Các props luôn được viết theo camelCase, value được truyền thông qua {}

/**
 *
 */
