import "./chat-messages.styles"
import { ChatMessagesContainer } from "./chat-messages.styles"
import { Fragment } from "react"
import MessageCouple from "./message-couple/message-couple.component"
import { useContext } from "react"
import { ChatContext } from "../../../contexts/chat/chat.context"
import LinearIndeterminate from "../../shared/mui/linear-progress/linear-progress.component"

const ChatMessages = () => {
  const { messageCouples, responseLoading } = useContext(ChatContext)

  return (
    <ChatMessagesContainer>
      {
        responseLoading === true && <LinearIndeterminate/>
      }

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