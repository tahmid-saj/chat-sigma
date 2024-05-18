import React, { Component } from "react";

import "./ChatMessageScroll.css";

const ChatMessagesScroll = (props) => {
  return (
    <div style={{ overflowY: "scroll", border: "4px solid black" }} className="chatMessageScroll">
      {props.children}
    </div>
  );
};

export default ChatMessagesScroll;