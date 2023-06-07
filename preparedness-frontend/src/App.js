import React, {useState} from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {

  const [modal, setModal] = useState(false)
  const [user, setUser] = useState("")

  const handleUser = (event) => setUser(event.target.value)
  
  const toggle = () => setModal(!modal)

  const clearField = () => setUser("")

  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input id="input-field" value = {user} onChange = {handleUser}/>
        </div>
        <div className="button-container">
          <Button id="button" onClick = {toggle}>Click Me</Button>
          <Button id="button" onClick = {clearField}>Reset</Button>
          <ModalComponent isOpen = {modal} toggle = {toggle} user = {user}/>
        </div>
      </div>
    </div>
  )
}

export default App
