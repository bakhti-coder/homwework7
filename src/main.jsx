import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import LanguageContextProvider from "./context/LanguageContext.jsx";

import "./index.css";
import PizzaCardContextProvider from "./context/PizzaCard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <PizzaCardContextProvider>
        <App />
      </PizzaCardContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);
