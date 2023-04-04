import { useState } from 'react'; 
import { ReactComponent as AltinnIkon } from '../../assets/AltinnLogoMedNavnFraFigma.svg';
import { ReactComponent as PersonGruppeIkon } from '../../assets/PersonGruppe.svg';
import bannerKnapperUrl from './banner_hoyre_knapper.png'
import vognKortUrl from './vognkortRessursEksempel.png'
import classes from './Ressurs2.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; 


export const Ressurs2 = () => {
    const navigate = useNavigate(); // øvre venstre Altinn-ikon og Fullfør-knapp klikkbare:
    // går tilbake til skisseside [5] :

    const [beskrivelse, setBeskrivelse] = useState('TestTest');

    const handleChange = () => {
        console.log("Er i handleChange: gå til ReactDev");
        // Bør oppdatere fra ReactDev standard, med ref etc.
        // https://react.dev/learn/manipulating-the-dom-with-refs#example-focusing-a-text-input
    }


    // Henter tittel del av resource state .json
    const tittelResource = useSelector( (state) => state.resource.title) ;

    // bruker et konverteringsmønster fra 
    // https://iq.js.org/questions/react/how-to-pretty-print-json-with-react
    const TittelResource = () => {
        return (
            <pre>{JSON.stringify(tittelResource, null, 2)}</pre>
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
                                    Beskrivelse av ressursen (engelsk) : {beskrivelse} 
                                </p>
                                <form>
                                    <input 
                                        type='text' 
                                        id='beskrivelseTekst' 
                                        name='beskrivelseNavn'
                                        onChange={() => {
                                            console.log("test");
                                            handleChange();
                                        }}
                                    ></input>
                                </form>
                                
                                

                                <p className={classes.beskrivelseAvRessurs}
                                > Hvem skal bruke ressursen (nynorsk)?</p>
                                <form>
                                    <input 
                                        type='text' 
                                        id='brukerTekst' 
                                        name='brukerNavn'
                                    ></input>
                                </form>
                                 
                                       
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
                                        console.log("Prøver finne input: React Ref må brukes");
                                        
                                        
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
                                    
                                    DYNAMISK (del av) JSON fil fra Redux state:
                                </p>
                                <TittelResource />
                            </div>
                        </div>
                        
                </div> 
            </div>
            
        </div>
    )
};