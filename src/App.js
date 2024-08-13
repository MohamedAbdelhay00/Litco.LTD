// src/App.js
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./Components/Navbar/Navbar";
import AppRoutes from "./routing/AppRoutes";
import { DirectionProvider } from "./context/DirectionContext";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppContent = () => {
  const { i18n } = useTranslation();
  const [direction, setDirection] = React.useState("ltr");

  useEffect(() => {
    const currentLanguage = i18n.language;
    const newDirection = currentLanguage === "ar" ? "rtl" : "ltr";
    setDirection(newDirection);
    document.documentElement.dir = newDirection;
    document.documentElement.lang = currentLanguage;
  }, [i18n.language]);

  return (
    <div className="App" style={{ direction }}>
      <Navbar />
      <AppRoutes />
    </div>
  );
};

const App = () => (
  <DirectionProvider>
    <ToastContainer />
    <AppContent />
  </DirectionProvider>
);

export default App;
