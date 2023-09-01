import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    setPersons(persons.concat({name: newName}))
    setNewName('')
  }

  const handleNameChanged = (event) =>
    setNewName(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>debug: {newName}</div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChanged}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  )
}

export default App