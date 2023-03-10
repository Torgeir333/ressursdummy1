import { useState } from 'react';
import './Sider.css';
import { ReactComponent as AltinnIcon } from '../../assets/altinn-logo.svg';
import { ResourceView } from '../../features/resource/ResourceView';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const Andreside = () => {

    const navigate = useNavigate(); 

    // Henter hele .json
    const testResource = useSelector( (state) => state.resource) ;

    // bruker et konverteringsmønster fra 
    // https://iq.js.org/questions/react/how-to-pretty-print-json-with-react
    const PrettyResource = () => {
        return (
            <pre>{JSON.stringify(testResource, null, 2)}</pre>
        )
    }


    return (
        <div className='andreSide'>
            <div>
                <a href="https://www.altinn.no" target="_blank">
                    <AltinnIcon />
                </a>
            </div>
            <h1>Ressursprosjekt Redux State</h1>

            <p> 
                Naviger sider:  
                <span onClick={() => navigate('/')}> [ 1 ]</span>  
                <span onClick={() => navigate('/andreside/')}>[ 2 ]</span> 
                <span onClick={() => navigate('/minidashboard/')}>[ 3 ]</span> 
            </p>

            <div>
                <p>
                    Her kan du teste interaksjon med Redux State ved å trykke på knappene.<br></br>
                    
                </p>
            </div>
            
            <ResourceView />

            <p> <b>Her kommer hele .json innhold:</b><br></br>
                (merk at .json kommer fra state og endres dynamisk med trykk)
            </p>

            <PrettyResource />
        </div>
    )
};