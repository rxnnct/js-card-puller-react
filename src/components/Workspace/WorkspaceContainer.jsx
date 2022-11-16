import {connect} from "react-redux";
import {updateNewDeckCardNumberActionCreator} from "../../state/reducers/deckReducer";
import Workspace from "./Workspace";

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
        }
    }
}

const WorkspaceContainer = connect(mapStateToProps, mapDispatchToProps)(Workspace);

export default WorkspaceContainer;