import { ReactNode } from "react";

// chat types

export type MessageCouple = {
  userMessage: string
  sigmaMessage: string
}

export interface ChatContextType {
  messageCouples: MessageCouple[],
  responseLoading: boolean,
  getChatResponse: (messageInput: string) => void
}

export interface ChatProviderProps {
  children: ReactNode
}
