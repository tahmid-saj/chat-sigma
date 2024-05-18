import React, { Component } from "react";

import "./MessageBox.css";
import sendMessage from "./send-message.png";

const MessageBox = ({ onUserMessageInputChange, onSendButtonSubmit }) => {
  return (
    <div className="center pa4 br3 shadow-5 messageBox">
      <input className="f4 pa2 w-70 center messageBoxInput" type="text" onChange={onUserMessageInputChange}/>

      <button type="submit" className="btnSendMessage w-10 grow white" onClick={onSendButtonSubmit}>
        <img className="btnSendMessage" alt="send-message" src={sendMessage} width={45} height={45}/>
      </button>
    </div>
  );
};

export default MessageBox;