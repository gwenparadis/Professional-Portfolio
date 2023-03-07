import React from "react";

export default function Home({ currentPage, handlePageChange }) {
  return (
    <div class="p-5 text-center bg-dark text-white">
      <h1 class="mb-3">Gwendelyn Paradis</h1>
      <h4 class="mb-3">Portfolio</h4>
      <button>
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          Get Started
        </a>
      </button>
    </div>
  );
}
