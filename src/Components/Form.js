import { useState } from "react"

const Form = ({ 
    handleSubmit, 
    nameInput, 
    setNameInput, 
    ageInput, 
    setAgeInput
    }) => {
    
   
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name:
                <input 
                    type='text'
                    value={nameInput}
                    onChange={(event) => setNameInput(event.target.value) }
                />
            </label>
            <br/>
            <label>
                Enter your age:
                <input 
                    type='text'
                    value={ageInput}
                    onChange={(event) => setAgeInput(event.target.value) }
                />
            </label>
            <br />
            <button type="submit">submit</button>
        </form>
    )
}

export default Form