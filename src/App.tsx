import { ToastContainer } from "react-toastify";
import "./App.css";
import AppRoute from "./routes";
function App() {
  return (
    <>
      <AppRoute />
      <ToastContainer />
    </>
  );
}

export default App;
