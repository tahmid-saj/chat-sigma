import { Fragment, useState } from "react"
import "./send-message.styles.scss"
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useContext } from "react";
import { ChatContext } from "../../../contexts/chat/chat.context";

const defaultFormFields = {
  messageInput: ""
}

const SendMessage = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { getChatResponse } = useContext(ChatContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getChatResponse(formFields.messageInput)

    resetFormFields()
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="send-message-container">
      <div className="send-message-form">
        <textarea className="send-message-input" type="text" name="messageInput" rows="5" onChange={ handleChange }></textarea>
        <button className="send-message-btn" type="button" onClick={ handleSubmit }><KeyboardDoubleArrowUpIcon fontSize="large" sx={{ color: "black" }}/></button>
      </div>
    </div>
  )
}

export default SendMessage