import { useState } from 'react'
import './App.css'
import { ReactComponent as AltinnIcon } from '../assets/altinn-logo.svg';
// import { useNavigate } from 'react-router-dom'; // can only be used in the context
// of a <Router> component. Får kjøre wrap i main.tsx senere.

export const App = () => {
  const [count, setCount] = useState(0)

  // const navigate = useNavigate(); // bruk til link fra ikon

  return (
    <div className="App">
      <div>
        <a href="https://www.altinn.no" target="_blank">
          <img src="altinn-logo.svg" className="logo" alt="Altinn logo" />
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

      <div>
      <a href="https://www.altinn.no" target="_blank">
        <AltinnIcon />
      </a>
      </div>

    </div>
  )
}
