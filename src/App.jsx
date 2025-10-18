import { ToastContainer } from "react-toastify";
import AppRouter from "./routes";

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
