const GENERATE_DECK = 'GENERATE_DECK';
const PULL_CARD = 'PULL_CARD';
const UPDATE_NEW_DECK_CARD_NUMBER = 'UPDATE_NEW_DECK_CARD_NUMBER';

const initialState = {
    cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    pulledCard: undefined,
    newDeckCardNumber: ''
}

//todo: remake this
const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GENERATE_DECK: {
            return {
                ...state
            };
        }
        case PULL_CARD: {
            return {
                ...state
            };
        }
        case UPDATE_NEW_DECK_CARD_NUMBER: {
            return {
                ...state,
                newDeckCardNumber: action.cardsNumber
            };
        }
        default:
            return state;
    }
}

export const generateDeckActionCreator = () => ({type: GENERATE_DECK});

export const pullCardActionCreator = () => ({type: PULL_CARD});

export const updateNewDeckCardNumberActionCreator = (num) => ({
    type: UPDATE_NEW_DECK_CARD_NUMBER,
    cardsNumber: num
})

export default cardsReducer;