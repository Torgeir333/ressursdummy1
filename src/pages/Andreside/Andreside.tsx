import { useState } from 'react';
import './Sider.css';
import { ReactComponent as AltinnIcon } from '../../assets/altinn-logo.svg';
import { ResourceView } from '../../features/resource/ResourceView';


export const Andreside = () => {

    const [count, setCount] = useState(0)

    return (
        <div className='andreSide'>
            <div>
                <a href="https://www.altinn.no" target="_blank">
                    <AltinnIcon />
                </a>
            </div>
            <h1>Ressursprosjekt Redux State</h1>
            <div className="card">
                <p>
                    Her kan du teste interaksjon med Redux State ved å trykke på knapper.<br></br>
                    Merk at Naviger Sider nedunder her ennå ikke bruker BrowserRouter, <br></br>
                    så ny html innlasting gir nullstilling av State.
                </p>
            </div>
            <ResourceView />

            <p> 
                Naviger sider: 
                [  <a href='http://localhost:5173/dummyroot'>1</a> ] 
                [  <a href='http://localhost:5173/dummyroot/andreside'>2</a> ]
                [  <a href='http://localhost:5173/dummyroot/minidashboard'>3</a> ]
            </p>
        </div>
    )
};