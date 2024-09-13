import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AppRouter from "./routes";
import ReduxProvider from "./store/provider";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <div className='container'>
    <ReduxProvider>
      <BrowserRouter>
      <AppRouter />
      </BrowserRouter>
    </ReduxProvider>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
