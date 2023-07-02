import React, { Component } from "react";

import UserMessage from "../UserMessage/UserMessage";
import BotMessage from "../BotMessage/BotMessage";

const UserCoupledBotMessage = () => {
  return (
    <div>
      <UserMessage/>
      <BotMessage/>
    </div>
  );
};

export default UserCoupledBotMessage;