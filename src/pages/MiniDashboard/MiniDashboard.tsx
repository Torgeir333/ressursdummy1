import React, { useState } from 'react';
import classes from './MiniDashboard.module.css'; 
import './Sider.css';
import { CenterContainer } from '../../components/CenterContainer';
import { Footer } from '../../components/Footer';
import { NavigeringsKomponent } from '../../components/NavigeringsKomponent';


export const MiniDashboard = () => {

    // setter inn forenklet versjon av Dashboard her
    // Merk as .css kommer fra (minst) 3 kilder: må ryddes

    // Det tok lang tid å oppfatte, men "Page" i Dashboard
    // er altså MINUS AppHeader, som kommer fra App.tsx
    // like før Router wrap som gir Dashboard Page... 
    // Herre! Inspector viste da Mui-elementer...
    // 

    // AppHeader er importert fra  'app-shared/navigation/main-header/Header';
    // som er en pseudo-url --> tool-tip i VSC gir reell katalog
    // men der ligger altså en slik Mui Header.tsx etc... men nå er det middag.
    // Jeg får heller hente Header-komponent fra DesignSystem... begynner forstå
    // hva slags problemer de hadde før DesignSystem... AltinnStudioLogo er en 
    // funksjon (!) som returnerer en <svg...  


    return (
        <div>
            <CenterContainer>
                <h1 className={classes.testh1}>
                    Ressursprosjekt MiniDashboard
                </h1>

                <NavigeringsKomponent />

                <p>
                    Denne siden bygges gradvis opp etter Altinn Studio Frontend Dashboard mønster.<br></br>
                    Men merk at Studio Dashboard side/page er delt i to mellom App og Dashboard.<br></br>
                    Så Header ligger faktisk i App-komponent. Skal erstatte den med DesignSystem Header.<br></br>
                    <br></br>
                    Denne siden demonstrerer integrasjon med Studio /frontend/ ettersom flere <br></br>
                    subkomponenter er hentet utenfor selve /dashboard/. <br></br>
                    <br></br>
                    MiniDashboard Footer krever også Language, i.e. språkstøtte, via i18next, som <br></br>
                    settes i main.tsx, mens språkfilene ligger nå lokalt i /language/
                </p>

            </CenterContainer>
            <Footer />
        </div>
    )

};