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

            <h1 className={classes.testH1 }>
                Ressursprosjekt Ressurs1 etter Skisse
            </h1>

            <NavigeringsKomponent />

            <p>Vi har fått tilgang til Figma skisser fra Sigurd og India.</p>
            

            <div className="card">
                <p> Kommentarer: Testet BannerKnapper men .png krasjer som ReactComponent. <br></br> 
                    Lyseblått banner først inn her: Figma skisse er 450px høyt, og 1737px vidt<br></br>
                    Oppå banneret ligger diverse knapper: skal bli svg, men .png blokk til høyre ennå.
                </p>
            </div>

            <hr></hr>
            
          
            <div>
                
                 
                <div>
                    <p> Her var tekst oppå banneret: nå AltinnIcon og bannerknapper lagt oppå: 
                        Denne siden er bred (men 1280px er break, ukjent hvorfor) nå pga. padding for .png bannerKnapper
                    </p>

                    <div className={classes.banner}>
                        <AltinnIcon className={classes.posisjonAltinnIkon} />
                        <img className={classes.bannerKnapperImage}   src={bannerKnapperUrl} />
                        <div>
                        <img className={classes.vognkortRessursImage}   src={vognKortUrl} />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
};