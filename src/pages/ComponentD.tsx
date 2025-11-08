import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ComponentD = () => {
  const user = useContext(AuthContext);
  return (
    <div>
      <h1>Xin chao {user.email ? user.email : "ban"}</h1>
    </div>
  );
};

export default ComponentD;
