import {connect} from "react-redux";
import StatusModal from "./StatusModal";
import {
    closeStatusModalCreator, loadStatusInfoCreator,
    updateStatusInfoCreator
} from "../../../redux/statusModalReducer";
import {addStatusCreator, updateStatusCreator} from "../../../redux/statusesRecuder";


let mapStateToProps = (state) => {
  return{
      statusInfo: state.statusModal,
      modalOpened: state.statusModal.statusModalOpened
  }
};


let mapDispatchToProps = (dispatch) => {
    return{
        closeStatusModal: () => {
            dispatch(closeStatusModalCreator());
        },

        updateStatusInfo: (name, value) => {
          dispatch(updateStatusInfoCreator(name, value));
        },

        addStatusToState: (status) => {
            dispatch(addStatusCreator(status));
        },

        loadStatusInfo: (status) => {
          dispatch(loadStatusInfoCreator(status));
        },

        updateStatusInState: (status) => {
            dispatch(updateStatusCreator(status));
        }
    }
};


export const StatusModalContainer = connect(mapStateToProps, mapDispatchToProps)(StatusModal);