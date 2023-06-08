import React, {useState} from "react"
import { Button, Input, Label, Form, FormGroup } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {

  // sets state for modal/username input
  const [modal, setModal] = useState(false)
  const [user, setUser] = useState("")

  // sets user state as inputs from the user
  const handleChange = (e) => setUser(e.target.name)
  
  // toggles the modal presentation on and off
  const toggle = () => setModal(!modal)

  // clears the input field
  const clearField = () => setUser("")

  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>

      <Form className="form">
        <FormGroup className="input">
          <Label for="name">Enter your name</Label>
          <Input id="input-field" name = {user} onChange = {handleChange}/>
        </FormGroup>
        <div className="button-container">
          <Button id="button" onClick = {toggle}>Click Me</Button>
          <Button id="button" onClick = {clearField}>Reset</Button>
          <ModalComponent isOpen = {modal} toggle = {toggle} user = {user}/>
        </div>
      </Form>
    </div>
  )
}

export default App
