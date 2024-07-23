import "./message-couple.styles"
import { MessageCoupleContainer } from "./message-couple.styles"
import SigmaMessage from "../sigma-message/sigma-message.component"
import UserMessage from "../user-message/user-message.component"

const MessageCouple = ({ messageCouple }) => {
  return (
    <MessageCoupleContainer>
      <UserMessage userMessage={ messageCouple.userMessage }></UserMessage>
      <SigmaMessage sigmaMessage={ messageCouple.sigmaMessage }></SigmaMessage>
    </MessageCoupleContainer>
  )
}

export default MessageCouple