import React, { Component } from "react";

const Navigation = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p className="f3 link dim white pa3 pointer">Chat</p>
      <p className="f3 link dim white pa3 pointer">Export</p>
      <p className="f3 link dim white pa3 pointer">About</p>
    </nav>
  );
};

export default Navigation;