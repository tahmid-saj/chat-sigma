import React, { Component } from "react";

import "./UserMessage.css";

const UserMessage = ({ userMessageInput }) => {
  return (
    <div className="white f5 userMessageBox">
      <p className="userMessage">{`User : ${userMessageInput}`}</p>
    </div>
  );
};

export default UserMessage;