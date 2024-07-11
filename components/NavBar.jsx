import React, { useContext } from "react";
import { ThemeContext } from "../src/App";

export default function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <nav>
        <h2>Where in the world?</h2>
        <div onClick={() => toggleTheme()}>
          {theme === "light" ? (
            <div className="modeBtn">
              <img src="./moon-regular.svg" alt="moon" />
              <h3>Dark Mode</h3>
            </div>
          ) : (
            <div className="modeBtn">
              <img src="./sun-regular.svg" alt="moon" />
              <h3>Light mode</h3>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
