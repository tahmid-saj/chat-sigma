import { errorOnInvalidMessageInput } from "../errors/chat.errors"

// chatbot validation

export const validateChatMessageInput = (messageInput: string): boolean => {
  if (messageInput === "") {
    errorOnInvalidMessageInput()
    return true
  }

  return false
}