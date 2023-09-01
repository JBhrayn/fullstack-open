import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const nameExists = persons.some(p => p.name === newName)
    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const newContact = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newContact))
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
        {persons.map(p => 
          <div key={p.name}>{p.name} {p.number}</div>
        )}
    </div>
  )
}

export default App