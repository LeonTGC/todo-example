import Form from "./Components/Form"
import { useState } from "react"
import Person from './Components/Person'
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
    setPersons([...persons, {name: nameInput, age: ageInput}])
    setAgeInput('')
    setNameInput('')
  }
  return (
    <div>
      <h1>my form</h1>
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
            />
      })}
    </div>
  )
}
export default App