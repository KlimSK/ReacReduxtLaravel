import Statuses from "./Statuses";
import {connect} from "react-redux";
import {addStatusModalCreator, editStatusModalCreator} from "../../../redux/statusModalReducer";
import {getStatusesCreator} from "../../../redux/statusesRecuder";


let mapStateToProps = (state) => {
    return{
        statuses: state.statusesPage.statuses
    }
};


let mapDispatchToProps = (dispatch) => {
  return{
      addStatusModal: () => {
          dispatch(addStatusModalCreator());
      },

      editStatusModal: (id) => {
        dispatch(editStatusModalCreator(id));
      },

      getStatuses: (statuses) => {
          dispatch(getStatusesCreator(statuses));
      }
  }
};



export const StatusesContainer = connect(mapStateToProps, mapDispatchToProps)(Statuses);