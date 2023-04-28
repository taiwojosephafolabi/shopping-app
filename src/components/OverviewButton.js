function OverviewButton(props) {
  return (
    <div>
      <button
        className="overview-btn"
        onClick={(event) => props.showProductOverviewPage(event)}
      >
        Overview
      </button>
    </div>
  );
}

export default OverviewButton;
