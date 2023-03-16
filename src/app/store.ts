import { configureStore } from '@reduxjs/toolkit';
import resourceReducer from '../features/resource/resourceSlice'; // default export alias import
import testurlReducer from '../features/testurl/testurlSlice';

const store = configureStore({
    reducer: {
        resource: resourceReducer,
        testurl: testurlReducer,
    },
    // fixme: add middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store; 

// Fra repo react-rtk-ts-demo:
// video31 7:07 "We need to type our store. We export to infered types from store,
// the rootState type and the app dispatch type. "
// "We are going to use these types to type our useSelector() 
// and useDispatch() hooks"
// "The convention is to create a new file in the app folder called hooks.ts"
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch