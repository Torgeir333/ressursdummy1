import { createSlice } from '@reduxjs/toolkit';

// setter initialState til korrekt URL
type InitialState = {
	url: String
}

const initialState: InitialState = {
	url: 'https://jsonplaceholder.typicode.com/users'
}



const testurlSlice = createSlice({
    name: 'testurl',
    initialState,
    reducers: {

        // state transition: setter testurl til korrekt adresse
        settretturl: (state) => {
            state.url = 'https://jsonplaceholder.typicode.com/users'
        },

        // another state transition: setter feil testurl
        settfeilurl: (state) => {
            state.url = 'https://jsonplaceholder.typicode.com/usersXXX'
        },
    },
})

// eksporterer reducer slice for bruk i store
export default testurlSlice.reducer;

// eksporterer actions som named exports
export const { settretturl, settfeilurl } = testurlSlice.actions;