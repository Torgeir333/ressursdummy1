import { useState } from 'react';
import './Sider.css';
import { ReactComponent as AltinnIcon } from '../../assets/altinn-logo.svg';
import { ResourceView } from '../../features/resource/ResourceView';
import { useNavigate } from 'react-router-dom'; 


export const Andreside = () => {

    const navigate = useNavigate(); 

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
                    Naviger Sider bruker nå BrowserRouter og useNavigate() hook <br></br>
                    så sideskifte gir ikke nullstilling av State.
                </p>
            </div>
            <ResourceView />

            <p> 
                Naviger sider:  
                <span onClick={() => navigate('/')}> [ 1 ]</span>  
                <span onClick={() => navigate('/andreside/')}>[ 2 ]</span> 
                <span onClick={() => navigate('/minidashboard/')}>[ 3 ]</span> 
            </p>
        </div>
    )
};