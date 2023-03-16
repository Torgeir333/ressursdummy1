import { useState } from 'react';
import './Sider.css';
import { ReactComponent as AltinnIcon } from '../../assets/altinn-logo.svg';
import { NavigeringsKomponent } from '../../components/NavigeringsKomponent';
import { useSelector } from 'react-redux';


export const QuerySide = () => {

    // her skal React Query kode fra Vishwas inn

    // Henter hele .json
    const testResource = useSelector( (state) => state.resource) ;

    // bruker et konverteringsmønster fra AndreSide fra
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
            <h1>Ressursprosjekt React Query</h1>

            <NavigeringsKomponent />

            <div>
                <p>
                    Her skal vi hente inn ny ressurs (.json) fra LocalTest Docker Container.<br></br>
                    Bakgrunn er at Studio Dashboard nylig fjernet all Redux for fetch håndtering etc.<br></br>
                    Det ble erstattet med React Query, som er verdt å teste ut for henting av Ressurs-data.<br></br>
                    Testkode for første runde hentes fra 'https://jsonplaceholder.typicode.com/users'<br></br>
                    som brukt i repo react-rtk-ts-demo, userSlice.ts med Axios. <br></br>
                    React Query kode hentes fra ditto Vishwas video3 og video4 (se notater).
                </p>
            </div>
            
            <br></br>
            <br></br>

            <p> <b>Under her kommer hele .json innhold fra Redux state:</b> <br></br>
                (merk at .json kommer fra state og endres dynamisk med trykk på Redux side [2])
            </p>

            <PrettyResource />
        </div>
    )
};