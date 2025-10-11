import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import AppRouter from "./routes";

// * npm i react-router-dom
const App = () => {
  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
