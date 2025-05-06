import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
  
  <Router>
    <Header/>
    <div className="app-wrapper">
      <App />
    </div>
    <Footer />
  </Router>
);
