import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }: any) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  console.log(user);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
