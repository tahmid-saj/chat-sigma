import "./chat-messages.styles"
import { ChatMessagesContainer } from "./chat-messages.styles"
import { Fragment } from "react"
import MessageCouple from "./message-couple/message-couple.component"

const ChatMessages = () => {
  return (
    <ChatMessagesContainer>
      <MessageCouple></MessageCouple>
      <MessageCouple></MessageCouple>
      <MessageCouple></MessageCouple>
      <MessageCouple></MessageCouple>
      <MessageCouple></MessageCouple>
      <MessageCouple></MessageCouple>
      <MessageCouple></MessageCouple>
      <MessageCouple></MessageCouple>
    </ChatMessagesContainer>
  )
}

export default ChatMessages