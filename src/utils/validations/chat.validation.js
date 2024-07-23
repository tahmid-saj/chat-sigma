import { errorOnInvalidMessageInput } from "../errors/chat.errors"

// chatbot validation

export const validateChatMessageInput = (messageInput) => {
  if (messageInput === "") {
    errorOnInvalidMessageInput()
    return true
  }

  return false
}