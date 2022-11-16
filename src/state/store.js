import {configureStore} from '@reduxjs/toolkit';
import cardReducer from "./reducers/cardReducer";

const reducer = {
    cards: cardReducer
}

let store = configureStore({
    reducer
})

window.store = store;

export default store;