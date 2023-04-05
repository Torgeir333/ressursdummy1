import { useState } from 'react';


import './Sider.css';
import { NavigeringsKomponent } from '../../components/NavigeringsKomponent';
import { ReactComponent as AltinnIcon } from '../../assets/altinn-logo.svg';



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

            <p>
                Første iterasjon av Ressurs-prosjektet er her oppe og kjører.<br></br>
                Første implementasjon av første skisse finnes på side [6] <br></br>
                <br></br>
                Dette er et <a href="https://vitejs.dev/">Vite </a>
                prosjekt, som betyr at utviklings-iterasjoner går raskere<br></br>
                fordi utvikleren ikke trenger vente på å "bygge" prosjektet hver gang han vil se en endring.<br></br>
                <br></br>
                Vite har også HMR (hot module reload) som betyr at utvikleren faktisk kan bygge om <br></br>
                deler av appen, mens resten kjører, og likevel beholder sine data intakt (state, se klikk-knapp under) 
                <br></br><br></br>
                Bygg for produksjon (til internett) av javascript og css bundles gjøres av 
                <a href="https://rollupjs.org/introduction/"> Rollup</a>.
            </p>
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