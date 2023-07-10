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
      userId: "1234567",
      userMessageInput: "",
      botMessageOutput: "",
      route: "chat",
      chatInitiated: false,
      userInitiated: false,
      userBotMessageCouples: []
    }
  }

  // componentDidMount() {
  //   fetch("http://localhost:3000/")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });
  // }

  initiateChatSession = (userId, userMessageInput, botMessageOutput) => {
    fetch("http://localhost:3000/initiateChat", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        userId: userId,
        userMessage: userMessageInput,
        botMessage: botMessageOutput
      })
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data === "chat initiated") {
        console.log("Chat initiated");
      } else {
        console.log("Chat could not be initiated");
      }
    })
  }

  sendUserBotMessage = (userId, userMessageInput, botMessageOutput) => {
    fetch("http://localhost:3000/sendMessage", {
      method: "put",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        userId: userId,
        userMessage: userMessageInput,
        botMessage: botMessageOutput
      })
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data === "message registered") {
        console.log("Message registered");
      } else {
        console.log("Message could not be registered");
      }
    })
  }

  onUserMessageInputChange = (event) => {
    this.setState({ userMessageInput: event.target.value });
  }

  onSendButtonSubmit = async () => {
    this.setState({ chatInitiated: true });

    // async function createChatCompletion(messages, options = {}) {
    //   try {
    //     const response = await openai.post("/chat/completions", {
    //         model: options.model || "gpt-3.5-turbo",
    //         messages,
    //         ...options
    //     });
    
    //     console.log(response.data.choices[0].message.content);
    //     return response.data.choices[0].message.content;
    //   } catch (error) {
    //       console.error("Failted to create chat completion: ", error);
    //   }
    // };

    // async function initiateGPTAPICall(userMessageInput) {
    //   const messages = [
    //       { role: "user", content: userMessageInput },
    //   ];
  
    //   const options = {
    //       temperature: 1,
    //       max_tokens: 4000
    //   };
  
    //   return await createChatCompletion(messages, options);
    // };

    // initiateGPTAPICall(this.state.userMessageInput);

    // await this.onNewUserCoupledBotMessage(this.state.userMessageInput, await initiateGPTAPICall(this.state.userMessageInput));
    
    await this.onNewUserCoupledBotMessage(this.state.userMessageInput, 
      await fetch("http://localhost:3000/getMessageQuery", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          userMessage: this.state.userMessageInput
        })}
      )
      .then((response) => {
        return response.json();
      })
    );
  }
  

  async onNewUserCoupledBotMessage(userMessageInput, botMessageOutput) {
    this.state.userBotMessageCouples.push(
      <div className='userCoupledBotMessage'>
        <UserMessage key={userMessageInput} userMessageInput={userMessageInput}/>
        <BotMessage key={botMessageOutput} botMessageOutput={botMessageOutput}/>
      </div>
    )

    // send user and bot message
    if (this.state.userInitiated) {
      this.sendUserBotMessage(this.state.userId, userMessageInput, botMessageOutput);
    }

    // initiate user's chat session
    if (!this.state.userInitiated) {
      this.initiateChatSession(this.state.userId, userMessageInput, botMessageOutput);
      this.setState({ userInitiated: true });
    }
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
              <MessageBox
                onUserMessageInputChange={this.onUserMessageInputChange} 
                onSendButtonSubmit={this.onSendButtonSubmit}
              />

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
