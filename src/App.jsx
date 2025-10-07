import { useEffect, useState } from "react";
import ComponentA from "./ComponentA";
import CheckingWindowSize from "./CheckingWindowSize";

const App = () => {
  const [show, setShow] = useState(false);
  const handleShowComponent = () => {
    setShow(!show);
  };
  return (
    <>
      <h1>Hello</h1>
      <button onClick={handleShowComponent}>{show ? "ẩn" : "hiện"}</button>
      {/* {show && <ComponentA />} */}
      {show && <CheckingWindowSize />}
    </>
  );
};

// state -> component re-render -> goi callback trong useEffect (callback co dependencies)

export default App;
