import { useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
        console.log(response.data)
      })
  }, [])

  const matchingCountries = countries.filter(c =>
    c.name.common.toLowerCase().includes(country.toLowerCase())
  );
  

  const showResults = () => {
    if(matchingCountries.length == 1){
      return showCountryInfo()
    }

    if(matchingCountries.length > 10){
      return <div>Too many matches, specify another filter</div>
    }

    return matchingCountries.map(
      c => <div 
              key={c.name.common}>{c.name.common}
          </div>
    )
  }

  const showCountryInfo = () => {
    return matchingCountries.map(
      c => <div>
              <h1>{c.name.common}</h1>
              <div>capital {c.capital}</div>
              <div>area {c.area}</div>

              <h3>languages:</h3>
              <ul>
                {Object.entries(c.languages).map(([code, language]) => (
                  <li key={code}>{language}</li>
                ))}
              </ul>
              <img
                src={c.flags.png}
                alt={c.name.common}
                width={200}
                height={150}
              />
          </div>
          
    )
  }

  return (
    <div>
      find countries 
      <input value={country} onChange={e => setCountry(e.target.value)}/>
      {showResults()}
    </div>
    
  )
}

export default App
