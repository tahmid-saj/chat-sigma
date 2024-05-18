import React, { Component } from "react";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p onClick={() => onRouteChange("chat")} className="f3 link dim white pa3 pointer">Chat</p>
      <p onClick={() => onRouteChange("export")} className="f3 link dim white pa3 pointer">Export</p>
      <p onClick={() => onRouteChange("about")} className="f3 link dim white pa3 pointer">About</p>
    </nav>
  );
};

export default Navigation;