import "./chat-messages.styles"
import { ChatMessagesContainer } from "./chat-messages.styles"
import { Fragment } from "react"
import MessageCouple from "./message-couple/message-couple.component"
import { useContext } from "react"
import { ChatContext } from "../../../contexts/chat/chat.context"

const ChatMessages = () => {
  const { messageCouples } = useContext(ChatContext)

  return (
    <ChatMessagesContainer>
      {
        messageCouples.map((messageCouple, index) => {
          return (
            <MessageCouple key={ index } messageCouple={ messageCouple }></MessageCouple>
          )
        })
      }
    </ChatMessagesContainer>
  )
}

export default ChatMessages