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
    // Merk at useQuery returnerer vistnok mye mer enn de delene (result)
    // vi destrukturerer ut, som isLoading, data, error etc...
    // så dette er forenklet (merk at error egentlig er i video4)

    // For interaksjon med URL: men en ny Query blir ikke trigget.
    // Må vel løfte testURL opp til Redux State
    // const [testURL, setTestURL] = useState('https://jsonplaceholder.typicode.com/users');


    // Henter URL fra Redux state (kan være korrekt eller feil)
    const testURL = useSelector( (state) => state.testurl.url);
    console.log("Er på side4: testURL = " + testURL); // 


    // React Query oppsett, destrukturering av retur(results gir alt)
    //  og konfigurering: useQuery() trenger minst to parametre: 
    // 1) unik key: "to identify this query",
    // 2) axios call function: "accept a function that returns a promise"
    // lokal re-render er forklart i videoer fra 6 til 10 etc.
    const {isLoading, data, isError, error, isFetching, refetch } = useQuery('unikQueryId1', () => {
        return axios.get(testURL)
    },
    {
        cacheTime: 5000,
        staleTime: 10000,

        refetchOnMount: false,
        refetchOnWindowFocus: false,

        enabled: false,
    }
    ); 
    
    // cacheTime default er 5 minutter = 30 000 ms (video 6)
    // staleTime default er 0 --> om man setter til 30 sekunder (de video7), så vil
    // ikke navigering vekk og tilbake trigge refetch (reload?!): kan observeres i Webinspector
    
    // video8: refetchOnMount default er true; vil kjøre refetch om data er "stale",
    // refetchOnWindowFocus: default er true; kjører bakgrunns fetch når man gir fokus
    // til siden igjen etter å ha klikket på en annen side

    // Eldre kommentar:
    // tredje parameter er config objekt, 
    // Merk at refetchOnMount: false ikke synes å blokkere nytt kall
    // ---> se video10: mount-vil-gi-nytt-kall, om ikke 
    // { enabled: false }   ---> men da må vi faktisk tvinge frem kall med Devtools
    // ved navigering tilbake fra annen side...  og isFetching blir true...


    console.log({ isLoading, isFetching});


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
                    Her er planen at vi skal vi hente inn ny ressurs (.json) fra LocalTest Docker Container.<br></br>
                    Bakgrunn er at Studio Dashboard nylig fjernet all Redux for fetch håndtering etc.<br></br>
                    Det ble erstattet med React Query, som er verdt å teste ut for henting av Ressurs-data.<br></br>
                    <br></br>
                    Testdata for første runde hentes fra :  
                    <a href='https://jsonplaceholder.typicode.com/users'>
                      'https://jsonplaceholder.typicode.com/users'</a><br></br>
                      JsonPlaceholder returnerer en array med 10 .json objekter. <br></br>
                  
                    
                </p>
            </div>
           
            <TestUrlView />
            <br></br>
            <button onClick={refetch}>Kjør Axios kall</button>
            
           
            <br></br>
            <div>
                <hr></hr>
                <h2>React Query async resultater:</h2>
               

                <p>Her er/var isLoading beskjed (rask, sees bedre med feil URL)</p>
                { isLoading && 
                    <h3>Is Loading...</h3>
                }
                <hr></hr>
                <p>Viser om data innkommet (om noe): </p>
                { data &&
                    <div>
                       <h3>Her kommer data.users-array length:</h3> 
                       {data?.data.length}
                    </div>
                }
                <hr></hr>
                <p>Her kommer feilmelding (etter 4 forsøk fra React Query, derav forsinkelse ): </p>
                { isError &&
                    <div>
                        <h3>React Query useQuery kall via Axios gav error.message:</h3>
                        { error.message }
                    </div>
                }   

            </div>
            <hr></hr>
            <hr></hr>
            <p>     <b>Kommentarer på React Query: </b>
                    Retur data fra useQuery() brukes over her, <br></br>
                    med inline rendering med && operatør. Så optional chaining.<br></br>
                    isLoading var svært rask, men var der. Lengde på data array<br></br>
                    skulle være, og er, 10, OK. Med 404-feil (endret URL) så <br></br>
                    prøver Axios/Query 4 ganger. Error håndtering svikter<br></br>
                    React feil: "objects not valid as React child".<br></br>
                    Fikset: rent error-objekt går ikke, men error.message går.
                </p>
                <br></br>
                    Legg merke til at Redux state er stabil, selv om URL blir satt til<br></br>
                    'https://jsonplaceholder.typicode.com/usersxxx' som gir 404-feil. Merk også React Query<br></br>
                    prøver igjen hver gang man navigerer til denne siden (og det med 4 reptisjon, se konsol) <br></br>
                    <br></br>
                    Har satt en knapp for valg av rett/feil URL. Men Axios kall trenger<br></br>
                    ennå reload av hele siden. Tror React Query har avanserte cache systemer som forstyrrer. <br></br>
                    Har nå konfigurert React Query ekstensivt for å blokkere cache, reload, refetch, stale-time etc.
                    <br></br>
                    
                    
                    Merk! Man kan få Hot Update av komponent uten å forstyrre state.<br></br>
                    Må være en Vite ting, men kult.
                        
            <br></br>
            <br></br>

            <p> <b>Under her kommer hele .json innhold fra Redux state:</b> <br></br>
                (merk at .json kommer fra state og endres dynamisk med trykk på Redux side [2])
            </p>

            <PrettyResource />
        </div>
    )
};