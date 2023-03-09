import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './resourceSlice';

export const ResourceView = () => {

    // tester tilgang til Redux State
    const testProperty = useSelector( (state) => state.resource.testProperty );
    const dispatch = useDispatch();

    return (
        <div>
            <h2> Tallet i testProperty nå : {testProperty} </h2>
            <button onClick={ () => dispatch(increase()) } >Øk tallet</button>
            <button onClick={ () => dispatch(decrease()) } >Senk tallet</button>
        </div>
    )
}