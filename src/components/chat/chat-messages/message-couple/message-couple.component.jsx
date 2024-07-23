import "./message-couple.styles"
import { MessageCoupleContainer } from "./message-couple.styles"
import SigmaMessage from "../sigma-message/sigma-message.component"
import UserMessage from "../user-message/user-message.component"

const MessageCouple = () => {
  return (
    <MessageCoupleContainer>
      <UserMessage></UserMessage>
      <SigmaMessage></SigmaMessage>
    </MessageCoupleContainer>
  )
}

export default MessageCouple