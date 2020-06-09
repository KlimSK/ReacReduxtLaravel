const ADD_CATEGORY_MODAL = "ADD_CATEGORY_MODAL";
const EDIT_CATEGORY_MODAL = "EDIT_CATEGORY_MODAL";
const CLOSE_CATEGORY_MODAL = "CLOSE_CATEGORY_MODAL";
const UPDATE_CATEGORY_INFO = "UPDATE_CATEGORY_INFO";
const LOAD_CATEGORY_INFO = "LOAD_CATEGORY_INFO";

let initialState = {
    categoryModalOpened: false,
    categoryModalType: '',

    categoryID: 0,
    categoryName: '',
    date: '',

};


const categoryModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY_MODAL:
            return {
                ...state,
                categoryModalOpened: true,
                categoryModalType: 'add',
                categoryID: 0,
                categoryName: '',
                date: '',
            };

        case EDIT_CATEGORY_MODAL:
            return{
                ...state,
                categoryModalOpened: true,
                categoryModalType: 'edit',
                categoryID: action.id
            };
        case CLOSE_CATEGORY_MODAL:
            return {
                ...state,
                categoryModalOpened: false,
                categoryModalType: '',
                categoryID: 0,
                categoryName: '',
                date: '',
            };
        case UPDATE_CATEGORY_INFO:
            return {
                ...state,
                [action.name]: action.value
            };

        case LOAD_CATEGORY_INFO:
            return{
                ...state,
                categoryName: action.category.name ? action.category.name : '',
                date: action.category.date ? action.category.date : '',
            };
        default:
            return state;
    }
};

export const updateCategoryInfoCreator = (name, value) => ({
    type: UPDATE_CATEGORY_INFO,
    name: name,
    value: value,
});

export const addCategoryModalCreator = () => ({type: ADD_CATEGORY_MODAL});
export const editCategoryModalCreator = (id) => ({type: EDIT_CATEGORY_MODAL, id: id});
export const closeCategoryModalCreator = () => ({type: CLOSE_CATEGORY_MODAL});
export const loadCategoryInfoCreator = (category) => ({type: LOAD_CATEGORY_INFO, category: category});


export default categoryModalReducer;