import { useState } from 'react';
import { ReactComponent as AltinnIcon } from '../assets/altinn-logo.svg';
import './Sider.css';

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
            <div className="card">
                <p>Her kan du teste interaksjon ved å trykke på teller: </p>
                <button onClick={() => setCount((count) => count + 1)}>
                    Teller er: {count}
                </button>
            </div>

            <p> 
                Naviger sider: 
                [  <a href='http://localhost:5173/dummyroot'>1</a> ] 
                [  <a href='http://localhost:5173/dummyroot/andreside'>2</a> ]
            </p>

        </div>
    )
};