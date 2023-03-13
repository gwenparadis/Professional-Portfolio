import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <footer class="footer text-center bg-light">
        Gwen Paradis, BSW, SE <br></br> Full Stack JavaScript Software Engineer{" "}
        <br></br>© March 2023
        <div>
          <a href="https://github.com/gwenparadis">GitHub</a>
          <br></br>
          <a href="https://www.linkedin.com/in/gwen-paradis-b2abb7192/">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
