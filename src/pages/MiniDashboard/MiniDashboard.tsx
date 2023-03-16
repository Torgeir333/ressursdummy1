import React, { useState } from 'react';
import classes from './MiniDashboard.module.css'; 
import './Sider.css';
import { CenterContainer } from '../../components/CenterContainer';
import { Footer } from '../../components/Footer';
import { useNavigate } from 'react-router-dom'; 


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

    const navigate = useNavigate(); 

    return (
        <div>
            <CenterContainer>
                <h1 className={classes.testh1}>
                    MiniDashboard
                </h1>

                <p> 
                    Naviger sider:  
                    <span onClick={() => navigate('/')}> [ 1 ]</span>  
                    <span onClick={() => navigate('/andreside/')}>[ 2 ]</span> 
                    <span onClick={() => navigate('/minidashboard/')}>[ 3 ]</span> 
                </p>

                <p>Denne siden bygges gradvis opp etter Altinn Studio Frontend Dashboard mønster.</p>

            </CenterContainer>
            <Footer />
        </div>
    )

};