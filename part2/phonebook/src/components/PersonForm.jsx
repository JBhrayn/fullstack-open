import { useState } from 'react'

const PersonForm = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
  
    const addPerson = (event) => {
      event.preventDefault()
      const nameExists = persons.some(p => p.name === newName)
      if (nameExists) {
        alert(`${newName} is already added to phonebook`)
      }
      else {
        const newPerson = {
          name: newName,
          number: newNumber
        }
        setPersons(persons.concat(newPerson))
      }
      setNewName('')
      setNewNumber('')
    }
  
    return (
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                    value={newName} 
                    onChange={e => setNewName(e.target.value)}/>
          <br/>
          number: <input 
                    value={newNumber}
                    onChange={e => setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )  
}

export default PersonForm