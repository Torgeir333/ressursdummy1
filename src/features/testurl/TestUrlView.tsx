import React from 'react';
// import { useSelector, useDispatch } from 'react-redux'; // i TypeScript må typet selector og dispatch brukes
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { settretturl, settfeilurl } from './testurlSlice';

export const TestUrlView = () => {

    // tester tilgang til Redux State
    const testurl = useAppSelector( (state) => state.testurl.url );
    const dispatch = useAppDispatch();

    return (
        <div>
            <h2> URL brukt nå er : {testurl} </h2>
            <button onClick={ () => dispatch(settretturl()) } >Sett korrekt URL</button>
            <button onClick={ () => dispatch(settfeilurl()) } >Sett feil URL</button>
        </div>
    )
}