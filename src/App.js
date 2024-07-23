import React from "react";

// ############  route-start  ################
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Carousel from "./components/layouts/Carousel";
import Faq from "./components/layouts/Faq";
import Article from "./components/layouts/Article";
import Hamper from "./components/layouts/Hamper";
import Announce from "./components/layouts/Announce";
import Footer from "./components/layouts/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// ############  route-end  ################

function App() {
  return (
    <>
      <Router>
        <Header /> 
        <Carousel />
        <Faq />
        <Hamper />
        <Article />
        <Announce />
        <Footer />
      </Router>
    </>
  );
}

export default App;
