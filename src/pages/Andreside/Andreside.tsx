import { useState } from 'react';
import './Sider.css';
import { ReactComponent as AltinnIcon } from '../../assets/altinn-logo.svg';
import { ResourceView } from '../../features/resource/ResourceView';
import { NavigeringsKomponent } from '../../components/NavigeringsKomponent';
import { useSelector } from 'react-redux';


export const Andreside = () => {

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

            <NavigeringsKomponent />

            <div>
                <p>
                    Her kan du teste interaksjon med en "ressurs" i Redux State ved å trykke på knappene.<br></br>
                    
                </p>
            </div>
            
            <ResourceView />

            <br></br>
            <p> <b>En "ressurs" i form av .json innhold fra Redux State vises her:</b><br></br>
                (merk at "testproperty" i .json under her endres dynamisk med knappetrykk)
            </p>

            <PrettyResource />
        </div>
    )
};