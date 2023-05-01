import React from "react";

function OverviewButton({showProductOverviewPage}) {
  return (
    <div>
      <button
        className="overview-btn"
        onClick={(event) => showProductOverviewPage(event)}
      >
        Overview
      </button>
    </div>
  );
}

export default OverviewButton;
