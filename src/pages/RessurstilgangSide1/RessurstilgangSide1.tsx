import { useState } from 'react';

// import './Sider.css';
import { NavigeringsKomponent } from '../../components/NavigeringsKomponent';
import { ReactComponent as AltinnIcon } from '../../assets/AltinnLogoMedNavnFraFigma.svg';
// import { ReactComponent as BannerKnapper } from '../../assets/banner_hoyre_knapper.png'; // PNG import krasjer
// Vite Docs importerer sånn:
// import imgUrl from './img.png'
// document.getElementById('hero-img').src = imgUrl

// import bannerKnapperUrl from './banner_hoyre_knapper.png'
// import vognKortUrl from './vognkortRessursEksempel.png'

import classes from './RessurstilgangSide1.module.css';



export const RessurstilgangSide1 = () => {

    const [count, setCount] = useState(0)

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
                    
                    <div>
                        <p>Bilde her</p>
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

                                <button className={classes.fullfoerKnapp}>Fullfør</button>
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