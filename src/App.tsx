import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://www.altinn.no" target="_blank">
          <img src="/altinn-logo.svg" className="logo" alt="Altinn logo" />
        </a>
      </div>

      <h1>Ressursprosjekt Dummy1</h1>
      <div className="card">
        <p>Her kan du teste interaksjon ved å trykke på teller: </p>
        <button onClick={() => setCount((count) => count + 1)}>
          Teller er: {count}
        </button>
      </div>
      <p className="read-the-docs">
        Dummy prosjektet ligger foreløpig på 
        <a href="https://github.com/Torgeir333/ressursdummy1"> github.com/Torgeir333/</a>
      </p>
    </div>
  )
}

export default App
