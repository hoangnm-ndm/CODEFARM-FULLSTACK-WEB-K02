import React, { useEffect } from "react";

const CheckingWindowSize = () => {
  useEffect(() => {
    const handleResize = () => {
      console.log(`${window.innerWidth} x ${window.innerHeight} `);
      if (window.innerWidth <= 220) {
        alert("kich thuoc thiet bi qua be, vui long mua iphone 17 pro max");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      console.log("clean up");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // * addEventListener thì cần removeEventListener khi không dùng nữa -> nếu không thì gây rò rỉ bộ nhớ (memory leak)
  // * -> unsubscribe

  // * dùng hiểu biết về useEffect để khi unmount component này sẽ không gây rò rỉ bộ nhớ cho ứng dụng.

  return <div>CheckingWindowSize</div>;
};

export default CheckingWindowSize;
