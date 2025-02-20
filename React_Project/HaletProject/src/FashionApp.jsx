import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./FashionProject/components/Header";
import Home from "./FashionProject/pages/Home";
import Footer from "./FashionProject/components/Footer";
const FashionApp = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default FashionApp;
