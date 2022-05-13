import React from "react";
import "./Backdrop.css";

const Backdrop = ({ setDrawerOpen }) => {
  return <div className="backdrop" onClick={() => setDrawerOpen(false)} />;
};

export default Backdrop;
