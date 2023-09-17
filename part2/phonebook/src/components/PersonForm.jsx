import { useState } from 'react'
import dbServices from '../services/phonebook'
import Notification from '../components/Notification'

const PersonForm = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [notificationMessage, setNotificationMessage] = useState('hidden')

  
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
              setNotificationMessage(`${newName}'s number successfully updated`)
            })
            .catch(() => {
              setNotificationMessage(`Information of ${newName} has already been removed from server`)
              setPersons(persons.filter(p => p.name !== newName))
            })
            setTimeout(() => {
              setNotificationMessage('hidden')
            }, 3000)
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
          setNotificationMessage(`Added ${newPerson.name}`)
        setTimeout(() => {
          setNotificationMessage('hidden')
        }, 2000)
      }
      setNewName('')
      setNewNumber('')
    }
  
    return (
      <div>
        <Notification message={notificationMessage} />
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