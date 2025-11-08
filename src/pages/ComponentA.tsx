import React, { useState } from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  return (
    <div>
      <h1>Component A</h1>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
