import React, { useState } from 'react';
import classes from './MiniDashboard.module.css'; 
import cn from 'classnames';
import './Sider.css';

export const MiniDashboard = () => {
    // skal sette inn enkel versjon av Dashboard her

    return (
        <div>
            <h1>
                MiniDashboard
            </h1>

            <p> 
                Naviger sider: 
                [  <a href='http://localhost:5173/dummyroot'>1</a> ] 
                [  <a href='http://localhost:5173/dummyroot/andreside'>2</a> ]
                [  <a href='http://localhost:5173/dummyroot/minidashboard'>3</a> ]
            </p>

        </div>
    )

};