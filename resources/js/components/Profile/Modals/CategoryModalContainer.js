import {connect} from "react-redux";
import CategoryModal from "./CategoryModal";
import {
    closeCategoryModalCreator,
    loadCategoryInfoCreator,
    updateCategoryInfoCreator
} from "../../../redux/categoryModalReducer";
import {addCategoryCreator, updateCategoryCreator} from "../../../redux/categoriesReducer";


let mapStateToProps = (state) => {
    return {
        categoryInfo: state.categoryModal,
        modalOpened: state.categoryModal.categoryModalOpened
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addCategoryToState: (category) => {
          dispatch(addCategoryCreator(category));
        },

        updateCategoryInState: (category) => {
            dispatch(updateCategoryCreator(category))
        },

        closeCategoryModal: () => {
            dispatch(closeCategoryModalCreator());
        },
        updateCategoryInfo: (name, value) => {
            dispatch(updateCategoryInfoCreator(name, value));
        },
        loadCategoryInfo: (category) => {
            dispatch(loadCategoryInfoCreator(category));
        }
    }
};

const CategoryModalContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryModal);

export default CategoryModalContainer;