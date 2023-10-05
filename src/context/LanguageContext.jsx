import { createContext, useState } from "react";
import PropTypes from "prop-types";
import Languages from "../data";

export const LanguageContex = createContext();

const LanguageContextProvider = ({ children }) => {
  const [langType, setLangType] = useState(
    localStorage.getItem("language") || "ru"
  );
  const changeLang = (e) => {
    setLangType(e.target.value);
    localStorage.setItem("language", e.target.value);
  };

  const state = { langType, lang: Languages[langType], setLangType, changeLang };
  return (
    <LanguageContex.Provider value={state}>{children}</LanguageContex.Provider>
  );
};

LanguageContextProvider.propTypes = {
  children: PropTypes.node,
};

export default LanguageContextProvider;
