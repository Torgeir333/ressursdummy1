import { NavigeringsKomponent } from '../../components/NavigeringsKomponent';
import { ReactComponent as AltinnIcon } from '../../assets/AltinnLogoMedNavnFraFigma.svg';

import classes from './RessurstilgangSide1.module.css';

import { useSelector } from 'react-redux'; // skal hente ressurs.json data fra Redux State


export const RessurstilgangSide1 = () => {

    // hente inn data fra ressurs.json i Redux her
    // men mangler f.eks. sector ---> hente fra nav.json i resourceregistry repo f.eks.?

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
            Jeg vil også beholde Banner del, som vel ligger inni App faktisk.<br></br>
            Et problem er at RuneSkisse sector er tom array i alle .json jeg finner.<br></br>
            Mens thematicArea alltid er "http://publications.europa.eu/resource/authority/eurovoc/2468"<br></br>
            ResourceType er "MaskinportenSchema", OK, men kunne trenge alternativer... Be Rune om sånt?<br></br>
            Eller bare legg inn en array med alternativer... <br></br>
            Jeg burde vel også få tak i disse 300 ressursene som skal finnes?! Fikk noe av Remi før påske...
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