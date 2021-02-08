import thunk from 'redux-thunk';
import reducer from './index';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
});

export default store;