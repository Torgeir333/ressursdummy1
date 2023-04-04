import { NavigeringsKomponent } from '../../components/NavigeringsKomponent';
import { ReactComponent as AltinnIcon } from '../../assets/AltinnLogoMedNavnFraFigma.svg';
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
                    <AltinnIcon 
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
                                Beskrivelse av ressursen (skal ha input boks). <br></br> <br></br>
                                        <br></br> <br></br>

                                Hvem skal bruke ressursen? (skal ha input boks). <br></br> <br></br>
                                        <br></br> <br></br>

                                Hvilke områder er ressursen relevant for ? (skal ha multiple valg boks under). <br></br> 
                                
                                        <br></br>
                                Velg mellom 1 til 3 alternativer (skal være grå, og mindre font)

                                        
                                        <br></br> <br></br><br></br> <br></br>

                                Om ressursen  <br></br> <br></br>

                                Ressurstype  <br></br>
                                Hva skal denne ressursen brukes til? (skal ha 4 avkrysningsbokser)
                                    <br></br> <br></br> 

                                <button 
                                    className={classes.fullfoerKnapp}
                                    onClick={() => navigate('/ressurs1/')}
                                >Fullfør</button>
                            </p>          
                        </div>


                        <div className={classes.hoyreHvitBoks}>
                            <p className={classes.boksOverskrift}> 
                                (logo) Sånn ser det ut for brukerne 
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