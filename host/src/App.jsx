import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import AppRouter from "./router";
import ThemeProvider from "./themes";
import ThemeSettingsButton from "./themes/ThemeSettingsButton";

const App = () => (
  <div className='container'>
    <ThemeProvider>
      <ThemeSettingsButton />
      <AppRouter />
    </ThemeProvider>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
