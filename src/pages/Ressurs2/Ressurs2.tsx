import { NavigeringsKomponent } from '../../components/NavigeringsKomponent';
import { ReactComponent as AltinnIkon } from '../../assets/AltinnLogoMedNavnFraFigma.svg';
import { ReactComponent as PersonGruppeIkon } from '../../assets/PersonGruppe.svg';
import bannerKnapperUrl from './banner_hoyre_knapper.png'
import vognKortUrl from './vognkortRessursEksempel.png'
import classes from './Ressurs2.module.css';
import { useNavigate } from 'react-router-dom'; 


export const Ressurs2 = () => {
    const navigate = useNavigate(); // øvre venstre Altinn-ikon og Fullfør-knapp klikkbare:
    // går tilbake til skisseside [5] :

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
                            <p className={classes.boksOverskrift}> Informasjon om ressursen </p>
                                        
                            <p className={classes.beskrivelseAvRessurs}>
                                Beskrivelse av ressursen 
                                <form>
                                    <input 
                                        type='text' 
                                        id='beskrivelseTekst' 
                                        name='beskrivelseNavn'
                                    ></input>
                                </form>
                                
                                <br></br> 

                                Hvem skal bruke ressursen?
                                <form>
                                    <input 
                                        type='text' 
                                        id='brukerTekst' 
                                        name='brukerNavn'
                                    ></input>
                                </form>
                                 <br></br> 
                                       
                                Hvilke områder er ressursen relevant for ? (EuroByråkrati multiple valg-bokser). <br></br> 
                                Velg mellom 1 til 3 alternativer (skal være grå, og mindre font)<br></br>
                                <br></br>
                                <form>
                                <input type='checkbox' id='lawSjekk' name='law' value='law'></input>
                                    <label>Law</label> <span></span>

                                    <input type='checkbox' id='scienceSjekk' name='science' value='science'></input>
                                    <label>Science</label>  <br></br>

                                    <input type='checkbox' id='tradeSjekk' name='trade' value='trade'></input>
                                    <label>Trade</label> <span></span>

                                    <input type='checkbox' id='transportSjekk' name='transport' value='transport'></input>
                                    <label>Transport</label> <br></br>
                                </form>
                                        
                                 <br></br>

                                <b>Om ressursen </b> <br></br>
                                <br></br>
                                Ressurstype  <br></br>
                                Hva skal denne ressursen brukes til?
                                <br></br><br></br>
                                    <form>
                                    <input type='checkbox' id='eksternTjenesteSjekk' name='eksternTjeneste' value='eksternTjeneste'></input>
                                    <label>Eksterne tjenester</label>  <br></br>

                                    <input type='checkbox' id='altinnTjenesteSjekk' name='altinnTjeneste' value='altinnTjeneste'></input>
                                    <label>Tjenester i Altinn</label> <br></br>

                                    <input type='checkbox' id='friRessursSjekk' name='friRessurs' value='friRessurs'></input>
                                    <label>Frittstående ressurs</label>  <br></br>

                                    <input type='checkbox' id='hendelseSjekk' name='hendelse' value='hendelse'></input>
                                    <label>Hendelse eller livshendelse</label> <br></br>

                                    </form>

                                <br></br>

                                <button 
                                    className={classes.fullfoerKnapp}
                                    onClick={() => navigate('/ressurs1/')}
                                >Fullfør</button>
                            </p>          
                        </div>


                        <div className={classes.hoyreHvitBoks}>
                            <p className={classes.boksOverskrift}>
                                <PersonGruppeIkon className={classes.posisjonPersonGruppeIkon}  /> 
                                Sånn ser det ut for brukerne 
                            </p>
                            <br></br> 

                            <p className={classes.beskrivelseAvRessurs}>
                                Data.norge(grå) Norge.no (blå) Altinn
                                <br></br> <br></br> 
                                Nedtrekks-meny ... så Desktop(blå) Mobile(hvit)
                                <br></br> <br></br> 
                                (logo) Felles datakatalog ... about ... tools...<br></br>
                                (SVART BOKS MED søkefelt etc etc etc...)
                                <br></br> 
                            </p>
                        </div>
                        
                </div> 
            </div>
            
        </div>
    )
};