import { Fragment, useState } from "react"
import "./send-message.styles.scss"
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const defaultFormFields = {
  messageInput: ""
}

const SendMessage = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    alert(formFields.messageInput)

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
        <button className="send-message-btn" type="button" onClick={ handleSubmit }><KeyboardDoubleArrowUpIcon fontSize="large"/></button>
      </div>
    </div>
  )
}

export default SendMessage