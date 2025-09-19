import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </HashRouter>
);
