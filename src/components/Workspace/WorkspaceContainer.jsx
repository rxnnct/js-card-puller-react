import {connect} from "react-redux";
import {
    generateDeck,
    pullCard,
    updateNewDeckCardNumber
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

const dispatchMap = {updateNewDeckCardNumber, generateDeck, pullCard};

const WorkspaceContainer = connect(mapStateToProps, dispatchMap)(Workspace);

export default WorkspaceContainer;