import React from "react";

const CheckingWindowSize = () => {
  const handleResize = () => {
    console.log(`${window.innerWidth} x ${window.innerHeight} `);
  };
  window.addEventListener("resize", handleResize);
  // * addEventListener thì cần removeEventListener khi không dùng nữa -> nếu không thì gây rò rỉ bộ nhớ (memory leak)
  // * -> unsubscribe

  return <div>CheckingWindowSize</div>;
};

export default CheckingWindowSize;
