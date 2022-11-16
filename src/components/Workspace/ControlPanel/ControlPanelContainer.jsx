import ControlPanel from "./ControlPanel";
import {connect} from "react-redux";
import {updateNewDeckCardNumberActionCreator} from "../../../state/reducers/deckReducer";

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

const ControlPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ControlPanel);

export default ControlPanelContainer;