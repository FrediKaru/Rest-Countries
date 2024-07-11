import { createContext, useState } from "react";
import "./styles/main.scss";
import NavBar from "../components/NavBar";
import Content from "../components/Content";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <NavBar />
          <Content />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
