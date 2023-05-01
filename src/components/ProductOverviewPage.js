import React from "react";

function ProductOverviewPage({ showHomePage }) {
  return (
    <div>
      <button type="button" className="back-btn" onClick={() => showHomePage()}>
        Back to Home
      </button>
      <h1 className="heading">Product Overview</h1>
    </div>
  );
}

export default ProductOverviewPage;
