import { useState } from 'react';
import './Sider.css';
import { ReactComponent as AltinnIcon } from '../assets/altinn-logo.svg';


export const Andreside = () => {

    const [count, setCount] = useState(0)

    return (
        <div className='andreSide'>
            <div>
                <a href="https://www.altinn.no" target="_blank">
                    <AltinnIcon />
                </a>
            </div>
            <h1>Ressursprosjekt Andreside</h1>
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