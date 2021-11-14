import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/Login/Login';
import Home from './Pages/Home/Home';
import Extra from "./Pages/Extra/Extra";
import React, { useState } from "react";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="extra" element={<Extra />} />
      </Routes>
    </Router >
  );
}

export default App;
