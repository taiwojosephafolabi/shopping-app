import React from "react";
import Footer from "./Footer";

function LandingPage({ showHomePage }) {
  return (
    <div className="landing-page">
      <span className="landing-page-items">
        <h1>Shopping App</h1>
        <button
          type="button"
          className="browse-btn"
          onClick={() => showHomePage()}
        >
          Browse Items
        </button>
      </span>
      <Footer />
    </div>
  );
}

export default LandingPage;
