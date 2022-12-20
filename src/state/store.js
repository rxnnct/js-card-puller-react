import {configureStore} from '@reduxjs/toolkit';
import cardReducer from "./reducers/cardReducer";

const reducer = {
    cards: cardReducer
}

const store = configureStore({
    reducer
})

window.store = store;

export default store;