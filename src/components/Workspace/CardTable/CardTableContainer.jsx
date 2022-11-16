import {connect} from "react-redux";
import {updateNewDeckCardNumberActionCreator} from "../../../state/reducers/deckReducer";
import CardTable from "./CardTable";

const mapStateToProps = (state) => {
    return {
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

const CardTableContainer = connect(mapStateToProps, mapDispatchToProps)(CardTable);

export default CardTableContainer;