import {connect} from "react-redux";
import Categories from "./Categories";
import {
    addCategoryModalCreator,
    editCategoryModalCreator,
} from "../../../redux/categoryModalReducer";
import {getCategoriesCreator} from "../../../redux/categoriesReducer";


let mapStateToProps = (state) => {
    return{
        categories: state.categoriesPage.categories
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        addCategoryModal: () => {
            dispatch(addCategoryModalCreator());
        },
        editCategoryModal: (id) => {
          dispatch(editCategoryModalCreator(id));
        },
        getCategories: (categories) => {
            dispatch(getCategoriesCreator(categories));
        }
    }
};


const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Categories);

export default CategoriesContainer;