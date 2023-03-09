import { configureStore } from '@reduxjs/toolkit';
import resourceReducer from '../features/resource/resourceSlice'; // default export alias import

const store = configureStore({
    reducer: {
        resource: resourceReducer,
    },
    // fixme: add middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store; 