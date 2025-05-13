import { Fragment } from "react"
import "./chat.styles"
import { ChatContainer } from "./chat.styles"

import ChatMessages from "../../components/chat/chat-messages/chat-messages.component"
import SendMessage from "../../components/chat/send-message/send-message.component"

const Chat = () => {
  return (
    <ChatContainer>
      <ChatMessages></ChatMessages>
      <SendMessage></SendMessage>
    </ChatContainer>
  )
}

export default Chat