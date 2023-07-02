import React, { Component } from 'react';
import './App.css';

import Navigation from './components/chat/Navigation/Navigation';
import Icon from './components/chat/Icon/Icon';
import StartMessage from './components/chat/StartMessage/StartMessage';
import ChatMessages from './components/chat/ChatMessages/ChatMessages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Icon/>

        {/* Chat page below */}
        
        <StartMessage/>

        {/* // ChatMessages will contain multiple UserCoupledBotMessage components
        // UserCoupledBotMessage will contain a single UserMessage and a BotMessage component */}
        <ChatMessages/>

        {/* <MessageBox/> */}

        {/* 
        // Export page below 
        <ExportInstruction/>
        <ExportBox>
          <EmailExport/>
          <PDFExport/>
          <TxtExport/>
        </ExportBox> */}
        
        {/* 
        // About page below
        <AboutDescription/>
        <AboutLinks/> */}
      </div>
    );
  }
}

export default App;
