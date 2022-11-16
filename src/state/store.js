import {configureStore} from '@reduxjs/toolkit';
import cardsReducer from "./reducers/cardsReducer";

const reducer = {
    cards: cardsReducer
}

let store = configureStore({
    reducer
})

window.store = store;

export default store;