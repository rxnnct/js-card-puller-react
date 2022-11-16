import {configureStore} from '@reduxjs/toolkit';
import deckReducer from "./reducers/deckReducer";

const reducer = {
    cards: deckReducer
}

let store = configureStore({
    reducer
})

window.store = store;

export default store;