import React, { useState } from 'react';
import classes from './MiniDashboard.module.css'; 
import './Sider.css';
import { CenterContainer } from '../../components/CenterContainer';
import { Footer } from '../../components/Footer';

export const MiniDashboard = () => {
    // skal sette inn enkel versjon av Dashboard her

    return (
        <div>
            <CenterContainer>
                <h1 className={classes.testh1}>
                    MiniDashboard
                </h1>

                <p> 
                    Naviger sider: 
                    [  <a href='http://localhost:5173/dummyroot'>1</a> ] 
                    [  <a href='http://localhost:5173/dummyroot/andreside'>2</a> ]
                    [  <a href='http://localhost:5173/dummyroot/minidashboard'>3</a> ]
                </p>

            </CenterContainer>
            <Footer />
        </div>
    )

};