const GENERATE_DECK = 'GENERATE_DECK';
const PULL_CARD = 'PULL_CARD';
const UPDATE_NEW_DECK_CARD_NUMBER = 'UPDATE_NEW_DECK_CARD_NUMBER';

const initState = {
    deck: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    pulledCard: null,
    newDeckCardNumber: ''
}

//todo: extract business logic to utils
const cardReducer = (state = initState, action) => {
    switch (action.type) {
        case GENERATE_DECK: {
            const newDeck = [];
            for (let i = 1; i <= state.newDeckCardNumber; i++) {
                newDeck.push(i);
            }
            return {
                ...state,
                deck: newDeck,
                pulledCard: null
            };
        }
        case PULL_CARD: {
            const stateCopy = {
                ...state,
                deck: [...state.deck]
            };
            if (stateCopy.deck.length === 0) {
                return;
            }
            const cardForPulling = Math.floor(Math.random() * (stateCopy.deck.length))
            stateCopy.pulledCard = stateCopy.deck.splice(cardForPulling, 1);
            return stateCopy;
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

export const generateDeck = () => ({
    type: GENERATE_DECK
})

export const pullCard = () => ({type: PULL_CARD});

export const updateNewDeckCardNumber = (num) => ({
    type: UPDATE_NEW_DECK_CARD_NUMBER,
    cardsNumber: num
})

export default cardReducer;