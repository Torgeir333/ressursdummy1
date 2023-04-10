import { useState } from 'react'; 
import { ReactComponent as AltinnIkon } from '../../assets/AltinnLogoMedNavnFraFigma.svg';
import { ReactComponent as PersonGruppeIkon } from '../../assets/PersonGruppe.svg';
import bannerKnapperUrl from './banner_hoyre_knapper.png'
import vognKortUrl from './vognkortRessursEksempel.png'
import classes from './Ressurs2.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 

import { change_description_en, change_description_nn } from '../../features/resource/resourceSlice'; // for oppdatering av Redux State


export const Ressurs2 = () => {
    const navigate = useNavigate(); // øvre venstre Altinn-ikon og Fullfør-knapp klikkbare:
    // går tilbake til skisseside [5] :

    // Intern state: holder beskrivelse til Fullfør dytter til Redux State
    const [engelskBeskrivelse, setEngelskBeskrivelse] = useState( useSelector( (state) => state.resource.description.en)  );
    const [nynorskBeskrivelse, setNynorskBeskrivelse] = useState(useSelector( (state) => state.resource.description.nn) );
    const dispatch = useDispatch(); // for oppdatering av Redux State
    

    // Henter beskrivelse del av resource state .json
    const beskrivelseResource = useSelector( (state) => state.resource.description) ;

    // bruker et konverteringsmønster fra 
    // https://iq.js.org/questions/react/how-to-pretty-print-json-with-react
    const BeskrivelseResource = () => {
        return (
            <pre>{JSON.stringify(beskrivelseResource, null, 2)}</pre>
        )
    }

    return (
        <div className='ressurs2Side'>
                
            <div className={classes.bannerOgBoksKontainer}>

                <div className={classes.banner}>
                    <AltinnIkon 
                        className={classes.posisjonAltinnIkon} 
                        onClick={() => navigate('/ressurs1/')}
                    />
                    <img className={classes.bannerKnapperImage}   src={bannerKnapperUrl} />
                    <div>
                        <img className={classes.vognkortRessursImage}   src={vognKortUrl} />
                    </div>
                </div>
                   

                <div className={classes.fleksBoksHolder}>
                        
                        <div className={classes.venstreHvitBoks}>
                            <div className={classes.innholdIHvitBoks}>

                                <p className={classes.boksOverskrift}> Informasjon om ressursen </p>
                                        
                                <p className={classes.beskrivelseAvRessurs}>
                                    Beskrivelse av ressursen (engelsk-navn nå):
                                </p>

                                <>
                                    <input 
                                        value={engelskBeskrivelse}
                                        onChange={ (event) => { 
                                            setEngelskBeskrivelse(event.target.value);
                                                // kunne kjøre dispatch til resourceSlice her samtidig
                                                // om jeg ønsker simultan oppdatering... men hva
                                                // skal da FULLFØR knappen gjøre? Sende til backend?

                                                // Får respons på Redux State
                                            dispatch(change_description_en(event.target.value));
                                        }}
                                    />
                                </>
                                
                                
                                

                                <p className={classes.beskrivelseAvRessurs}> 
                                    Hvem skal bruke ressursen (nynorsk nå)?
                                </p>
                                <>
                                    <input 
                                        value={nynorskBeskrivelse}
                                        onChange={ (event) => { 
                                            setNynorskBeskrivelse(event.target.value);
                                                // kunne kjøre dispatch til resourceSlice her samtidig
                                                // om jeg ønsker simultan oppdatering... men hva
                                                // skal da FULLFØR knappen gjøre? Sende til backend?

                                                // Får respons på Redux State
                                            dispatch(change_description_nn(event.target.value));
                                        }}
                                    />
                                </>
                                 
                                       
                                <p className={classes.beskrivelseAvRessurs} >
                                    Hvilke områder er ressursen relevant for ? (EuroByråkrati multiple valg-bokser). <br></br> 
                                    Velg mellom 1 til 3 alternativer (skal være grå, og mindre font)
                                </p>
                            
                                <form>
                                <input type='checkbox' id='lawSjekk' name='law' ></input>
                                    <label>Law</label> <span></span>

                                    <input type='checkbox' id='scienceSjekk' name='science' ></input>
                                    <label>Science</label>  <br></br>

                                    <input type='checkbox' id='tradeSjekk' name='trade' ></input>
                                    <label>Trade</label> <span></span>

                                    <input type='checkbox' id='transportSjekk' name='transport' ></input>
                                    <label>Transport</label> <br></br>
                                </form>
                                        
                                 

                                <p className={classes.beskrivelseAvRessurs}
                                > <b>Om ressursen </b> <br></br>
                                Ressurstype  <br></br>
                                Hva skal denne ressursen brukes til?</p>
                                
                                    <form>
                                    <input type='radio' id='eksternTjenesteSjekk' name='eksternTjeneste' ></input>
                                    <label>Eksterne tjenester</label>  <br></br>

                                    <input type='radio' id='altinnTjenesteSjekk' name='altinnTjeneste' ></input>
                                    <label>Tjenester i Altinn</label> <br></br>

                                    <input type='radio' id='friRessursSjekk' name='friRessurs' ></input>
                                    <label>Frittstående ressurs</label>  <br></br>

                                    <input type='radio' id='hendelseSjekk' name='hendelse' ></input>
                                    <label>Hendelse eller livshendelse</label> <br></br>

                                    </form>

                                <button 
                                    className={classes.fullfoerKnapp}
                                    onClick={() => {
                                        navigate('/ressurs1/');
                                    } }
                                >Fullfør</button>
                            </div>         
                        </div>


                        <div className={classes.hoyreHvitBoks}>
                            <div className={classes.innholdIHvitBoks}>

                            
                                <p className={classes.boksOverskrift}>
                                    <PersonGruppeIkon className={classes.posisjonPersonGruppeIkon}  /> 
                                    Sånn ser det ut for brukerne 
                                </p>

                                <p className={classes.beskrivelseAvRessurs}>
                                    Data.norge(grå) Norge.no (blå) Altinn (grå) 
                                </p>
                            
                                <hr></hr>
                            
                                <form>
                                    <input 
                                        type='text' 
                                        id='portalBruktTekst' 
                                        name='portalBruktNavn'
                                        value='Nedtrekks-meny'
                                        readOnly
                                    ></input>
                                    <span></span>
                                    <span>....</span>
                                    <input 
                                        type='text' 
                                        id='portalBruktTekst' 
                                        name='portalBruktNavn'
                                        value='Desktop/mobil'
                                        readOnly
                                    ></input>
                             </form>

                               
                                
                                <p> (logo) Felles datakatalog ... about ... tools...<br></br>
                                    (SVART BOKS MED søkefelt etc etc etc...) <br></br> <br></br>
                                    
                                    BESKRIVELSE: dynamisk (del av) JSON fil fra Redux state:
                                </p>
                                <BeskrivelseResource />
                            </div>
                        </div>
                        
                </div> 
            </div>
            
        </div>
    )
};