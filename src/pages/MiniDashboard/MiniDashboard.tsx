import React, { useState } from 'react';
import classes from './MiniDashboard.module.css'; 
import './Sider.css';
import { CenterContainer } from '../../components/CenterContainer';
import { Footer } from '../../components/Footer';
import { useNavigate } from 'react-router-dom'; 


export const MiniDashboard = () => {

    // setter inn forenklet versjon av Dashboard her
    // Merk as .css kommer fra (minst) 3 kilder: må ryddes
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

            </CenterContainer>
            <Footer />
        </div>
    )

};