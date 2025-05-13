import { Fragment, useState } from "react"
import "./send-message.styles.scss"
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useContext } from "react";
import { ChatContext } from "../../../contexts/chat/chat.context";

type FormFields = {
  messageInput: string
}

const defaultFormFields = {
  messageInput: ""
}

const SendMessage = () => {
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields)
  const { getChatResponse } = useContext(ChatContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    getChatResponse(formFields.messageInput)

    resetFormFields()
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="send-message-container">
      <div className="send-message-form">
        <textarea placeholder="Enter your message" className="send-message-input" 
        name="messageInput" rows={ 5 } onChange={ handleChange }></textarea>
        <button className="send-message-btn" type="button" onClick={ handleSubmit } title="Send">
          <KeyboardDoubleArrowUpIcon fontSize="large" sx={{ color: "black" }}/>
        </button>
      </div>
    </div>
  )
}

export default SendMessage