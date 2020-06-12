const ADD_STATUS_MODAL = "ADD_STATUS_MODAL";
const EDIT_STATUS_MODAL = "EDIT_STATUS_MODAL";
const CLOSE_STATUS_MODAL = "CLOSE_STATUS_MODAL";
const UPDATE_STATUS_INFO = "UPDATE_STATUS_INFO";
const LOAD_STATUS_INFO = "LOAD_STATUS_INFO";


let initialState = {
    statusModalOpened: false,
    statusModalType: '',
    statusID: 0,
    statusName: "",
    color: "#1976d2",
    colorText: "#fff",
    colorPopup: false,
    colorTextPopup: false,
    order: null,
    locked: 0
};

const statusModalReducer = (state = initialState, action) =>{
    switch (action.type) {

        case ADD_STATUS_MODAL:
            return{
                ...state,
                statusModalOpened: true,
                statusModalType: 'add',
                statusID: 0,
                statusName: "",
                color: "#1976d2",
                colorText: "#fff",
                colorPopup: false,
                colorTextPopup: false
            };

        case EDIT_STATUS_MODAL:
            return{
                ...state,
                statusModalOpened: true,
                statusModalType: 'edit',
                statusID: action.id,
            };

        case CLOSE_STATUS_MODAL:
            return{
                ...state,
                statusModalOpened: false,
                statusModalType: '',
                statusID: 0,
                statusName: "",
                color: "#1976d2",
                colorText: "#fff",
                colorPopup: false,
                colorTextPopup: false
            };

        case UPDATE_STATUS_INFO:
            return{
                ...state,
                [action.name]: action.value
            };

        case LOAD_STATUS_INFO:
            return{
                ...state,
                statusName: action.status.name ? action.status.name : '',
                color: action.status.color ? action.status.color : '',
                colorText: action.status.colorText ? action.status.colorText : '',
                order: action.status.order ? action.status.order : '',
                locked: action.status.locked ? action.status.locked : '',
            };
        default:
            return state;
    }
};

export const updateStatusInfoCreator = (name, value) => ({
    type: UPDATE_STATUS_INFO,
    name: name,
    value: value
});


export const addStatusModalCreator = () => ({type: ADD_STATUS_MODAL});
export const editStatusModalCreator = (id) => ({type: EDIT_STATUS_MODAL, id: id});
export const closeStatusModalCreator = () => ({type: CLOSE_STATUS_MODAL});
export const loadStatusInfoCreator = (status) => ({type: LOAD_STATUS_INFO, status: status});


export default statusModalReducer;
