import React, { useContext } from "react";
import { ThemeApi } from "../../context/themeContext";

const Home = () => {
  const { theme } = useContext(ThemeApi);

  return (
    <div
      className={`container ${
        theme === "light" ? "bg-gray-100" : "bg-gray-800 text-white"
      }`}>
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
