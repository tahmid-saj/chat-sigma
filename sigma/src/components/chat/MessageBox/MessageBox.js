import React, { Component } from "react";

import "./MessageBox.css";
import sendMessage from "./send-message.png";

const MessageBox = () => {
  return (
    <div className="center pa4 br3 shadow-5">
      <input className="f4 pa2 w-70 center messageBoxInput" type="text"/>

      <button type="submit" className="btnSendMessage w-10 grow white">
        <img className="btnSendMessage" alt="send-message" src={sendMessage} border="0"/>
      </button>
    </div>
  );
};

export default MessageBox;