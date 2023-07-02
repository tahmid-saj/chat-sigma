import React, { Component } from 'react';
import './App.css';

import Navigation from '../components/chat/Navigation/Navigation';
import Icon from '../components/chat/Icon/Icon';
import StartMessage from '../components/chat/StartMessage/StartMessage';
import ChatMessages from '../components/chat/ChatMessages/ChatMessages';
import MessageBox from '../components/chat/MessageBox/MessageBox';

import ExportInstruction from '../components/export/ExportInstruction/ExportInstruction';
import ExportBox from '../components/export/ExportBox/ExportBox';

import AboutDescription from '../components/about/AboutDescription/AboutDescription';
import AboutLinks from '../components/about/AboutLinks/AboutLinks';
import ChatMessagesScroll from '../components/chat/ChatMessagesScroll/ChatMessagesScroll';
import UserMessage from '../components/chat/UserMessage/UserMessage';
import BotMessage from '../components/chat/BotMessage/BotMessage';

import "../components/chat/UserCoupledBotMessage/UserCoupledBotMessage.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      messageInput: "",
      route: "chat",
      chatInitiated: false,
      userBotMessageCouples: []
    }
  }

  onUserMessageInputChange = (event) => {
    this.setState({ messageInput: event.target.value });
  }

  onSendButtonSubmit = () => {
    console.log(this.state.messageInput);
    this.setState({ chatInitiated: true });

    this.onNewUserCoupledBotMessage(this.state.messageInput);
  }

  onNewUserCoupledBotMessage(userMessageInput) {
    this.state.userBotMessageCouples.push(
      <div className='userCoupledBotMessage'>
        <UserMessage userMessageInput={userMessageInput}/>
        <BotMessage/>
      </div>
    )
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  render() {
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange}/>
        <Icon/>

        {
          this.state.route === "chat" ?
            <div>
              {/* Chat page below */}
              <ChatMessagesScroll>
                {
                  this.state.chatInitiated === false ?
                    <StartMessage/>
                    :
                    <ChatMessages
                      userBotMessageCouples={this.state.userBotMessageCouples}
                    />
                }
              </ChatMessagesScroll>
              <MessageBox
                onUserMessageInputChange={this.onUserMessageInputChange} 
                onSendButtonSubmit={this.onSendButtonSubmit}
              />
            </div>
            : (
              this.state.route === "export" ?
              <div>
                {/* Export page below */}
                <ExportInstruction/>
                <ExportBox/>
              </div>
              : 
              <div>
                {/* About page below */}
                <AboutDescription/>
                <AboutLinks/>
              </div>
            )

        }
      </div>
    );
  }
}

export default App;
