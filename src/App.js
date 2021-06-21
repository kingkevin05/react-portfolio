import React, { useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const renderPage = () => {
    switch (currentPage) {
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Navigation>
      <main>{renderPage(currentPage)}</main>
      <Footer />
    </div>
  );
}

export default App;
