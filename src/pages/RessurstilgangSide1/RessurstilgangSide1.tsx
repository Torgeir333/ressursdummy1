import { NavigeringsKomponent } from '../../components/NavigeringsKomponent';
import { ReactComponent as AltinnIcon } from '../../assets/AltinnLogoMedNavnFraFigma.svg';

import classes from './RessurstilgangSide1.module.css';

import { useSelector } from 'react-redux'; 


export const RessurstilgangSide1 = () => {

    

    return (
        <div className='ressurs1Side'>
            <div>
                <a href="https://www.altinn.no" target="_blank">
                    <AltinnIcon />
                </a>
            </div>

            <h1>
                RessurstilgangSide1 per 26.04.23
            </h1>

            <NavigeringsKomponent />

            <p>
            Altinn Studio Docker, Webpack og NginX eksperimenter,<br></br>
            viser at vi er klar for å hakke ut en App pakket inn i UserService etc.<br></br>
            Jeg vil også beholde Banner del, som vel ligger inni App faktisk.
            </p>
            

            <div className="card">
                <p> 
                    Kommentarer: Under delestrek (hr), så skal jeg simulere Runes 2x3 ressurs.json <br></br>
                    tekstbokser etc.
                </p>
            </div>
            <hr></hr>
            
                
            <div className={classes.bannerOgBoksKontainer}>

                <div className={classes.banner}>
                    <AltinnIcon className={classes.posisjonAltinnIkon} />
                </div>
                   

                <div className={classes.fleksBoksHolder}>
                        
                        <div className={classes.venstreHvitBoks}>

                            <p className={classes.boksOverskrift}> Informasjon om ressursen (RuneSkisse)</p>
                                        
                            <p className={classes.beskrivelseAvRessurs}>
                                Tittel (norsk bokmål) (skal ha input boks). <br></br> <br></br>
                                        
                                Description (skal ha input boks). <br></br> <br></br>

                                RightsDescription (skal ha input boks). <br></br> <br></br>
                            
                                <br></br> <br></br>

                                Sector (dropdown/multiple select). <br></br> <br></br>
                                
                                        
                                Thematic area (dropdown/multiple select) <br></br> <br></br>
          
                                ResourceType: "MaskinportenSchema" : (dropdown/multiple select) <br></br> <br></br>

                                <br></br> <br></br>

                                <button className={classes.fullfoerKnapp}>Skift Språk</button>
                            </p>          
                        </div>


                        <div className={classes.hoyreHvitBoks}>
                            <p className={classes.boksOverskrift}> 
                                Sånn ser det ut for brukerne
                            </p>
                            
                            <p className={classes.beskrivelseAvRessurs}>
                                Data.norge(grå) Norge.no (blå) Altinn (noe annet)
                                <br></br> <br></br> 
                                Trenger ny skisse fra Sigurd og India her.
                                <br></br> 
                            </p>
                        </div>
                        
                </div> 
            </div>
            
        </div>
    )
};