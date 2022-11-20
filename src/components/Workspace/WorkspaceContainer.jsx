import {connect} from "react-redux";
import {
    generateDeckActionCreator,
    pullCardActionCreator,
    updateNewDeckCardNumberActionCreator
} from "../../state/reducers/cardReducer";
import Workspace from "./Workspace";

//todo: maybe split it into two containers for CardTable & ControlPanel?
const mapStateToProps = (state) => {
    return {
        deck: state.cards.deck,
        newDeckCardNumber: state.cards.newDeckCardNumber,
        pulledCard: state.cards.pulledCard,
        cards: state.cards
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewDeckCardNumber: (num) => {
            dispatch(updateNewDeckCardNumberActionCreator(num))
        },
        generateDeck: () => {
            dispatch(generateDeckActionCreator())
        },
        pullCard: () => {
            dispatch(pullCardActionCreator())
        }
    }
}

const WorkspaceContainer = connect(mapStateToProps, mapDispatchToProps)(Workspace);

export default WorkspaceContainer;