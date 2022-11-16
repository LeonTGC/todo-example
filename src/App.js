import Form from "./Components/Form"
import { useState } from "react"
import Person from './Components/Person'
import styled from "styled-components"
import { Header } from "./Styles/Styles"


const App = () => {
  const [persons, setPersons] = useState([])
  const [nameInput, setNameInput] = useState('')
  const [ageInput, setAgeInput] = useState('')

  const removeHandler = (index) => {
    let newArr = [...persons]
    newArr.splice(index, 1)
    setPersons(newArr)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setPersons([...persons, {name: nameInput, age: ageInput, finished: false}])
    setAgeInput('')
    setNameInput('')
  }
  const completed = (index) => {
    let items = [...persons]
    let update = items[index]
    update.finished = true
    setPersons(items)
  }
  return (
    <div>
      <Header>my form</Header>
      <Form 
        handleSubmit={handleSubmit} 
        nameInput={nameInput} 
        setNameInput={setNameInput}
        ageInput={ageInput}
        setAgeInput={setAgeInput}
      />
      {persons.map((person, index) => {
        return <Person 
          key={index}
          removeHandler={() => removeHandler(index)} 
          name={person.name} 
          age={person.age}
          completed={() => completed(index)}
          finished={person.finished}
            />
      })}
    </div>
  )
}
export default App