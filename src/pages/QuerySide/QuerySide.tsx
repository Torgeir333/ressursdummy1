import { useState } from 'react';
import './Sider.css';
import { ReactComponent as AltinnIcon } from '../../assets/altinn-logo.svg';
import { NavigeringsKomponent } from '../../components/NavigeringsKomponent';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query'; // importerer en hook fra React Query
import axios from 'axios'; // blir brukt av React Query useQuery()
import { TestUrlView } from '../../features/testurl/TestUrlView';


export const QuerySide = () => {

    // her skal React Query kode fra Vishwas video3 inn:
    // kaller hook med to parametre:
    // 1) en id eller unik key for å identifisere en query
    // 2) et Axios get kall (useQuery vil ha funksjon som returnerer et promise)
    // Merk! URL er her hentet fra react-rtk-ts-demo repo.
    // Merk at useQuery returnerer vistnok mye mer enn de delene
    // vi destrukturerer ut, som isLoading, data, error etc...
    // så dette er forenklet (merk at error egentlig er i video4)

    // For interaksjon med URL: men en ny Query blir ikke trigget.
    // Må vel løfte testURL opp til Redux State
    // const [testURL, setTestURL] = useState('https://jsonplaceholder.typicode.com/users');

    // Henter URL fra Redux state:
    const testURL = useSelector( (state) => state.testurl.url);
    console.log("Er på side4: testURL = " + testURL); // 

    // Rart at denne ikke blir kjørt igjen bare ved lokal re-render
    // men om man navigerer vekk og tilbake så blir den kjørt igjen
    const {isLoading, data, isError, error} = useQuery('unikQueryId1', () => {
        return axios.get(testURL)
    })

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
                    <br></br>
                    Testkode for første runde hentes fra 'https://jsonplaceholder.typicode.com/users'<br></br>
                    som brukt i repo react-rtk-ts-demo, userSlice.ts med Axios. <br></br>
                    JsonPlaceholder returnerer en array med 10 .json objekter.<br></br>
                    React Query kode hentes fra ditto Vishwas video3 og video4 (se notater).<br></br>
                    <br></br>
                    Legg merke til at Redux state er stabil, selv om URL nå er satt til<br></br>
                    'https://jsonplaceholder.typicode.com/usersxxx' som gir 404-feil. React Query<br></br>
                    prøver igjen hver gang denne siden blir rendret (og det 4 ganger), men app er stabil, <br></br>
                    som man ser av Redux state testProperty fra Redux siden [2]. <br></br>
                    Har satt en knapp for valg av URL: rett eller ikke rett, men Axios kall trenger<br></br>
                    ennå reload av hele siden (mulig React Query caching bug).
                </p>
            </div>
           
            <TestUrlView />
            <p>
                BUG: man må ennå navigere til annen side og tilbake for å trigge ny Axios innlasting.<br></br>
                Mulig det er React Query caching eller noe. Hmm... heller ikke isLoading blir oppdatert. <br></br>
                Men nå er URL interaktiv i alle fall. Mulig feil URL burde settes først.
            </p>
           
            <br></br>
            <div>
                <h2>React Query async aktivitet her:</h2>
                <p>
                    Merk! Man kan få Hot Update av komponent uten å forstyrre state.<br></br>
                    Må være en Vite ting, men kult.<br></br>
                    <br></br>
                    Her skal retur data fra useQuery() brukes, <br></br>
                    med inline rendering med && operatør. Så optional chaining.<br></br>
                    isLoading var svært rask, men var der. Lengde på data array<br></br>
                    skulle være, og er, 10, OK. Med 404-feil (endret URL) så <br></br>
                    prøver Axios/Query 4 ganger, men error håndtering svikter<br></br>
                    muligens fordi React feil: objects not valid as React child.<br></br>
                    OK rent error-objekt går ikke, men error.message går.
                </p>

                <p>Her er/var isLoading beskjed OK: merk! ikke brukt ved reload</p>
                { isLoading && 
                    <h3>Is Loading...</h3>
                }

                <p>Viser data innkommet (om noe): merk! ikke fjernet ved reload</p>
                { data &&
                    <div>
                       <h3>Her kommer data.users-array length:</h3> 
                       {data?.data.length}
                    </div>
                }

                <p>Her kommer feilmelding (etter 4 forsøk fra React Query ): </p>
                { isError &&
                    <div>
                        <h3>React Query useQuery kall via Axios gav error.message:</h3>
                        { error.message }
                    </div>
                }   

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