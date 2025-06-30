import React from "react";
import { useTheme } from "../context/ThemeContext";
import Button from "./Button";

const ThemeSwitcher = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Button variant="secondary" onClick={toggleDarkMode}>
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </Button>
  );
};

export default ThemeSwitcher;