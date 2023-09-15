import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import dbServices from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    dbServices
      .getAll()
      .then(initialRecords => {
        setPersons(initialRecords)
      })
  },[])

  const removeContact = id => {
    const name = persons.find(p => p.id === id).name
    if(confirm(`Delete ${name}?`)) {
      dbServices
        .remove(id)
        .then(returnedObject => {
            setPersons(persons.filter(p => p.id !== id))
      })
      alert(`${name} deleted.`)
    }
  }

  const filteredContacts = persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <Persons contacts={filteredContacts} removeContact={removeContact}/> 
    </div>
  )
}

export default App