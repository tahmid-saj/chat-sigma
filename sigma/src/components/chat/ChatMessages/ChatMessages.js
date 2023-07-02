import React, { Component } from "react";

import UserCoupledBotMessage from "../UserCoupledBotMessage/UserCoupledBotMessage";

const ChatMessages = ({ userBotMessageCouples }) => {
  return (
    <div>
      <UserCoupledBotMessage userBotMessageCouples={userBotMessageCouples}/>
    </div>
  );
};

export default ChatMessages;