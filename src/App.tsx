import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom"
import Navigation from './routes/navigation/navigation.component';
import HomeRoute from './routes/home/home.component';
import ChatRoute from './routes/chat/chat.component';
import ExportRoute from './routes/export/export.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigation/> }>
        <Route index element={ <HomeRoute/> }/>
        <Route path="chat" element={ <ChatRoute/> }/>
        <Route path="export" element={ <ExportRoute/> }/>
      </Route>
    </Routes>
  )
}

export default App;
