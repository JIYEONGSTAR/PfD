import React from "react";
import "Css/Progress.scss";

function Progress({ page }) {
  var width = window.innerWidth;
  var now = (window.innerWidth / 4) * (page + 1);

  return (
    <div className="progress-div" style={{ width: width }}>
      <div style={{ width: now }} className="progress"></div>
    </div>
  );
}

export default Progress;
