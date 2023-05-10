import React from "react";

function OverviewButton({showProductOverviewPage}) {
  return (
    <div>
      <button
        className="button"
        onClick={(event) => showProductOverviewPage(event)}
      >
        Overview
      </button>
    </div>
  );
}

export default OverviewButton;
