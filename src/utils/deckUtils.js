export const getCardForPulling = (deckLength) => {
    return Math.floor(Math.random() * (deckLength));
}