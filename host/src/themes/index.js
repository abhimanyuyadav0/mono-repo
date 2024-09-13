import React, { createContext, useState, useEffect, useMemo, useContext } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import { lightColors, darkColors, oceanColors, goldenColors, rainbowColors } from "./themeColors"; // Import the color collections

// Create a context to store the theme mode globally
const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  // Function to detect system theme preference
  const getSystemTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Function to get the saved theme from local storage
  const getSavedTheme = () => localStorage.getItem(process.env.APP_NAME);

  // Initial theme state based on saved theme or system preference
  const initialTheme = getSavedTheme() || (getSystemTheme() ? "dark" : "light");

  // State for managing theme
  const [themeMode, setThemeMode] = useState(initialTheme);

  // Handle theme toggle manually
  const toggleTheme = (theme) => {
    setThemeMode(theme);
  };

  // Listen for changes to the system theme and update the state accordingly
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = (e) => {

      setThemeMode(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  // Create themes with the imported color collections
  const themes = {
    light: createTheme({
      palette: {
        mode: "light",
        primary: { main: lightColors.primary },
        secondary: { main: lightColors.secondary },
        background: {
          default: lightColors.backgroundDefault,
          paper: lightColors.backgroundPaper,
        },
        text: {
          primary: lightColors.textPrimary,
          secondary: lightColors.textSecondary,
        },
      },
    }),
    dark: createTheme({
      palette: {
        mode: "dark",
        primary: { main: darkColors.primary },
        secondary: { main: darkColors.secondary },
        background: {
          default: darkColors.backgroundDefault,
          paper: darkColors.backgroundPaper,
        },
        text: {
          primary: darkColors.textPrimary,
          secondary: darkColors.textSecondary,
        },
      },
    }),
    ocean: createTheme({
      palette: {
        mode: "light", // Assuming ocean is a light mode theme
        primary: { main: oceanColors.primary },
        secondary: { main: oceanColors.secondary },
        background: {
          default: oceanColors.backgroundDefault,
          paper: oceanColors.backgroundPaper,
        },
        text: {
          primary: oceanColors.textPrimary,
          secondary: oceanColors.textSecondary,
        },
      },
    }),
    golden: createTheme({
      palette: {
        mode: "light", // Assuming golden is a light mode theme
        primary: { main: goldenColors.primary },
        secondary: { main: goldenColors.secondary },
        background: {
          default: goldenColors.backgroundDefault,
          paper: goldenColors.backgroundPaper,
        },
        text: {
          primary: goldenColors.textPrimary,
          secondary: goldenColors.textSecondary,
        },
      },
    }),
    rainbow: createTheme({
      palette: {
        mode: "light", // Assuming golden is a light mode theme
        primary: { main: rainbowColors.primary },
        secondary: { main: rainbowColors.secondary },
        background: {
          default: rainbowColors.backgroundDefault,
          paper: rainbowColors.backgroundPaper,
        },
        text: {
          primary: rainbowColors.textPrimary,
          secondary: rainbowColors.textSecondary,
        },
      },
    }),
  };

  // Memoize the theme to optimize performance
  const theme = useMemo(() => themes[themeMode], [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
