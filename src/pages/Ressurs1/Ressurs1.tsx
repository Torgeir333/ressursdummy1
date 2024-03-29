import { useState } from 'react';

// import './Sider.css';
import { NavigeringsKomponent } from '../../components/NavigeringsKomponent';
import { ReactComponent as AltinnIcon } from '../../assets/AltinnLogoMedNavnFraFigma.svg';
// import { ReactComponent as BannerKnapper } from '../../assets/banner_hoyre_knapper.png'; // PNG import krasjer
// Vite Docs importerer sånn:
// import imgUrl from './img.png'
// document.getElementById('hero-img').src = imgUrl

import bannerKnapperUrl from './banner_hoyre_knapper.png'
import vognKortUrl from './vognkortRessursEksempel.png'

import classes from './Ressurs1.module.css';




export const Ressurs1 = () => {

    const [count, setCount] = useState(0)

    return (
        <div className='ressurs1Side'>
            <div>
                <a href="https://www.altinn.no" target="_blank">
                    <AltinnIcon />
                </a>
            </div>

            <h1>
                Ressursprosjekt Ressurs1 etter Skisse per 03.04.23
            </h1>

            <NavigeringsKomponent />

            <p>Har nå tilgang til Figma skisser fra Sigurd og India.<br></br> 
            Første implementasjon av skisse sees under her. Skisse i arbeid er side [6]</p>
            

            <div className="card">
                <p> Kommentarer: Testet BannerKnapper men .png krasjer som ReactComponent. <br></br> 
                    Lyseblått banner: Figma skisse er 450px høyt (som her), og 1737px vidt (her 1280px)<br></br>
                    Oppå banneret ligger diverse knapper: skal bli svg, men .png blokk (høyre) ennå. <br></br>
                    AltinnIcon og bannerknapper er bare lagt oppå.<br></br>
                    De to hvite, overlappende boksene er for interaksjon (venstre) <br></br>
                    og forhåndsvisning (høyre).
                    
                </p>
               
            </div>

            <hr></hr>
            
            

           
                
            <div className={classes.bannerOgBoksKontainer}>

                <div className={classes.banner}>
                    <AltinnIcon className={classes.posisjonAltinnIkon} />
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