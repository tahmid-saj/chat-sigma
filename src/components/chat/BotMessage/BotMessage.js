import React, { Component } from "react";

import "./BotMessage.css";

const BotMessage = ({ botMessageOutput }) => {
  return (
    <div className="white f5 botMessageBox">
      <p className="botMessage">{`Sigma : ${botMessageOutput}`}</p>
    </div>
  );
};

export default BotMessage;