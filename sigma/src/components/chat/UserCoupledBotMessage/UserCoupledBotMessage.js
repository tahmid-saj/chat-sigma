import React, { Component } from "react";

import "./UserCoupledBotMessage.css";

import UserMessage from "../UserMessage/UserMessage";
import BotMessage from "../BotMessage/BotMessage";

const UserCoupledBotMessage = ({ userBotMessageCouples }) => {
  return (
    <div>
        {userBotMessageCouples}
    </div>
    
  )
};

export default UserCoupledBotMessage;