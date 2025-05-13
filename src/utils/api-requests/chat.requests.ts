import { errorOnGetChatResponse } from "../errors/chat.errors";

// chat api requests

// response
export const getChatResponse = async (messageInput: string): Promise<string | undefined> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL_CHAT}`, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain"
      },
      body: String(messageInput)
    })

    const { message } = await response.json()
    return message
  } catch (error) {
    errorOnGetChatResponse()
  }
}