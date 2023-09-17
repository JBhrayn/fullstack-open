import { useState } from 'react'
import dbServices from '../services/phonebook'
import Notification from '../components/Notification'

const PersonForm = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [successMessage, setSuccessMessage] = useState(null)

  
    const addPerson = (event) => {
      event.preventDefault()
      const person = persons.find(p => p.name === newName)
      if (person) {
        if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
          const updatedContact = {...person, number:newNumber}
          dbServices
            .update(person.id, updatedContact)
            .then(returnedObject => {
              setPersons(persons.map(p => p.name !== person.name ? p : returnedObject))
            })
          alert(`${newName}'s number successfully updated`)
        }
      }
      else {
        const newPerson = {
          name: newName,
          number: newNumber
        }
        dbServices
          .create(newPerson)
          .then(returnedObject => {
            setPersons(persons.concat(returnedObject))
          } )
        setSuccessMessage(`Added ${newPerson.name}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 3000)
      }
      setNewName('')
      setNewNumber('')
    }
  
    return (
      <div>
        <Notification message={successMessage} />
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
      </div>
    )  
}

export default PersonForm