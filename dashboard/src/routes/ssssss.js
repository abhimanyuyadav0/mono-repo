// src/Router.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/dashboard";
import About from "../pages/about";
import Contact from "../pages/contact";
import Layout from "../layouts";
import ComponentColors from "../pages/colors";
import UserPage from "../pages/users";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/colors" element={<ComponentColors />} />
        <Route path="/users" element={<UserPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
