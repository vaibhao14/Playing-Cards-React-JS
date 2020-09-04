import React from "react";

export default ({ num, type, color }) => {
  return (
    <div style={color} className="card">
      <div className="top">
        <div>{num}</div>
        <div>{type}</div>
      </div>

      <div className="middle">{type}</div>

      <div className="bottom">
        <div className="inverted-logo">{type}</div>
        <div className="inverted-logo">{num}</div>
      </div>
    </div>
  );
};
