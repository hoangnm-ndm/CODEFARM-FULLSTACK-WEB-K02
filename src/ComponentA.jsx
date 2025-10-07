import React, { useEffect } from "react";

const ComponentA = () => {
  console.log("component render");
  useEffect(() => {
    console.log("component mounted");
    const myInterval = setInterval(() => {
      console.log("goi lai interval");
    }, 1000);
    return () => {
      console.log("component unmounted - clean up");
      clearInterval(myInterval);
    };
  }, []);
  return (
    <div>
      <h1>Component A</h1>
    </div>
  );
};

export default ComponentA;
