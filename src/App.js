import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import "./App.css";
import Box from "./components/Box";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Learn from "./components/Learn";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Question from "./components/Question";
import ShowCase from "./components/ShowCase";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <ShowCase />
        <Newsletter />
        <Box />
        <Learn />
        <Question />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
