import React from 'react';

function LandingPage({ showHomePage, showProductOverviewPage }) {
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
        <button
          type="button"
          className="browse-btn"
          onClick={() => showProductOverviewPage()}
        >
          Overview Product
        </button>
      </span>
    </div>
  );
}

export default LandingPage;
