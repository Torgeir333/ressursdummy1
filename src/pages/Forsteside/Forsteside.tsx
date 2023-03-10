import { useState } from 'react';
import { ReactComponent as AltinnIcon } from '../../assets/altinn-logo.svg';
import './Sider.css';
import { useNavigate } from 'react-router-dom'; 


export const Forsteside = () => {

    const [count, setCount] = useState(0)
    const navigate = useNavigate(); 

    return (
        <div className='forsteSide'>
            <div>
                <a href="https://www.altinn.no" target="_blank">
                    <AltinnIcon />
                </a>
            </div>
            <h1>Ressursprosjekt Førsteside</h1>

            <p> 
                Naviger sider:  
                <span onClick={() => navigate('/')}> [ 1 ]</span>  
                <span onClick={() => navigate('/andreside/')}>[ 2 ]</span> 
                <span onClick={() => navigate('/minidashboard/')}>[ 3 ]</span> 
            </p>


            <div className="card">
                <p>Her kan du teste interaksjon ved å trykke på teller: </p>
                <button onClick={() => setCount((count) => count + 1)}>
                    Teller er: {count}
                </button>
            </div>
        </div>
    )
};