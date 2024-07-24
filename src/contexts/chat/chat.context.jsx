import { useState, createContext } from "react";
import { validateChatMessageInput } from "../../utils/validations/chat.validation";
import { getChatResponse } from "../../utils/api-requests/chat.requests";

// helper functions
const getChatResponseHelper = async (messageCouples, userMessage) => {
  if (validateChatMessageInput(userMessage)) return messageCouples

  const res = await getChatResponse(userMessage)

  return [
    ...messageCouples,
    {
      userMessage: userMessage,
      sigmaMessage: res
    }
  ]
}

// initial state
export const ChatContext = createContext({
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
export const ChatProvider = ({ children }) => {
  const [messageCouples, setMessageCouples] = useState([])
  const [responseLoading, setResponseLoading] = useState(false)

  const getChatResponse = async (userMessage) => {
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