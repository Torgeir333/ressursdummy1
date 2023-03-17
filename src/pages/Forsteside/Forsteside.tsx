import { useState } from 'react';
import { ReactComponent as AltinnIcon } from '../../assets/altinn-logo.svg';
import './Sider.css';
import { NavigeringsKomponent } from '../../components/NavigeringsKomponent';



export const Forsteside = () => {

    const [count, setCount] = useState(0)

    return (
        <div className='forsteSide'>
            <div>
                <a href="https://www.altinn.no" target="_blank">
                    <AltinnIcon />
                </a>
            </div>
            <h1>Ressursprosjekt Førsteside</h1>

            <NavigeringsKomponent />

            <p>Første iterasjon av Ressurs-prosjektet er her oppe og kjører.</p>
            <br></br>

            <div className="card">
                <p>Her kan du teste interaksjon med lokal state ved å trykke på teller: </p>
                <button onClick={() => setCount((count) => count + 1)}>
                    Teller er: {count}
                </button>
                <p>
                    På neste side [2] kan du interagere med Redux State som bevarer informasjon<br></br>
                    selv om du navigerer rundt.
                </p>
            </div>
        </div>
    )
};