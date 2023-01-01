import {connect} from "react-redux";
import {
    generateDeck,
    pullCard,
    updateNewDeckCardNumber
} from "../../state/reducers/cardReducer";
import WorkspacePage from "./WorkspacePage";

const mapStateToProps = (state) => {
    return {
        deck: state.cards.deck,
        newDeckCardNumber: state.cards.newDeckCardNumber,
        pulledCard: state.cards.pulledCard,
        cards: state.cards
    }
}

const mapDispatchToProps = {updateNewDeckCardNumber, generateDeck, pullCard};

const WorkspacePageContainer = connect(mapStateToProps, mapDispatchToProps)(WorkspacePage);

export default WorkspacePageContainer;