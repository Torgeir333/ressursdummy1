import { NavigeringsKomponent } from '../../components/NavigeringsKomponent';
import { ReactComponent as AltinnIcon } from '../../assets/AltinnLogoMedNavnFraFigma.svg';

import classes from './RessurstilgangSide1.module.css';
import { TextField } from '@digdir/design-system-react';
import { RessursTittelInput } from '../../components/RessursTittelInput'
import { RessursBeskrivelseInput } from '../../components/RessursBeskrivelseInput'
import { RessursRettighetsBeskrivelseInput } from '../../components/RessursRettighetsBeskrivelseInput'
import { useState } from 'react'; 
import { useSelector } from 'react-redux'; // skal hente ressurs.json data fra Redux State


export const RessurstilgangSide1 = () => {

    // hente inn data fra ressurs.json i Redux her
    // men mangler f.eks. sector ---> hente fra nav.json i resourceregistry repo f.eks.?

    // Første TextField fra @digdir/design-system-react;
    const [valueTextField1, setValueTextField1] = useState("gammelTittel");

    const handleTextField1Change = (input: string) => {
        setValueTextField1(input);
    }

    // Andre tekstfelt : Description = Beskrivelse
    const [valueTextField2, setValueTextField2] = useState("gammelBeskrivelse");

    const handleTextField2Change = (input: string) => {
        setValueTextField2(input);
    }

    // Tredje tekstfelt : RettighetsBeskrivelse = RightsDescription
    const [valueTextField3, setValueTextField3] = useState("gammelRettighetsBeskrivelse");

    const handleTextField3Change = (input: string) => {
        setValueTextField3(input);
    }
    

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

                            <div className={classes.tekstFelt1}>
                                <RessursTittelInput
                                    propValueTextField1 = {valueTextField1} 
                                    propHandleTextField1Change = {handleTextField1Change}
                                />
                            </div>
                            
                            <div className={classes.tekstFelt2}>
                                <RessursBeskrivelseInput
                                    propValueTextField2 = {valueTextField2} 
                                    propHandleTextField2Change = {handleTextField2Change}
                                />
                            </div>

                            <div className={classes.tekstFelt3}>
                                <RessursRettighetsBeskrivelseInput
                                    propValueTextField3 = {valueTextField3} 
                                    propHandleTextField3Change = {handleTextField3Change}
                                />
                            </div>

                            <p className={classes.beskrivelseAvRessurs}>
                            

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
                            
                            <div className={classes.oppdatertRessurs}>
                                <h4>Her er oppdatert ressurs:</h4>
                            
                                <h5>Tittel = {valueTextField1}</h5>
                                <h5>Beskrivelse = {valueTextField2}</h5>
                                <h5>Rettighetsbeskrivelse = {valueTextField3}</h5>

                                <h5>Sector = {valueTextField1}</h5>
                                <h5>Thematic Area = {valueTextField1}</h5>
                                <h5>ResourceType = MaskinportenSchema</h5>
                            </div>
                               


                        </div>
                        
                </div> 
            </div>
            
        </div>
    )
};