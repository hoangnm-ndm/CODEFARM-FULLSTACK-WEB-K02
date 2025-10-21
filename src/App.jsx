import { ToastContainer } from "react-toastify";
import AppRouter from "./routes";
import "./App.css";
// * npm i react-router-dom
const App = () => {
  return (
    <>
      <AppRouter />
      <ToastContainer />
    </>
  );
};

export default App;
