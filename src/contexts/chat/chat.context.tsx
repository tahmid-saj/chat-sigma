import { useState, createContext, FC } from "react";
import { validateChatMessageInput } from "../../utils/validations/chat.validation";
import { getChatResponse } from "../../utils/api-requests/chat.requests";

import { ChatContextType, ChatProviderProps, MessageCouple } from "./chat.types";

// helper functions
const getChatResponseHelper = async (messageCouples: MessageCouple[], userMessage: string) => {
  if (validateChatMessageInput(userMessage)) return messageCouples

  const res = await getChatResponse(userMessage)

  return [
    ...messageCouples,
    {
      userMessage: userMessage,
      sigmaMessage: res
    }
  ] as MessageCouple[]
}

// initial state
export const ChatContext = createContext<ChatContextType>({
  messageCouples: [],
  // messageCouples structure
  // [
  //   {
  //     userMessage: "",
  //     sigmaMessage: ""
  //   }
  // ]

  responseLoading: false,

  getChatResponse: () => {}
})

// chat provider
export const ChatProvider: FC<ChatProviderProps> = ({ children }) => {
  const [messageCouples, setMessageCouples] = useState<MessageCouple[]>([])
  const [responseLoading, setResponseLoading] = useState<boolean>(false)

  const getChatResponse = async (userMessage: string) => {
    setResponseLoading(true)
    const resChat = await getChatResponseHelper(messageCouples, userMessage)
    setMessageCouples(resChat)
    setResponseLoading(false)
  }

  const value = { messageCouples, getChatResponse, responseLoading }

  return (
    <ChatContext.Provider value={ value }>
      { children }
    </ChatContext.Provider>
  )
}