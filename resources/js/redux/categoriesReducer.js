const GET_CATEGORIES = "GET_CATEGORIES";
const ADD_CATEGORY = "ADD_CATEGORY";
const UPDATE_CATEGORY = "UPDATE_CATEGORY";

let initialState = {
    categories: []
};


const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [
                    action.category,
                    ...state.categories
                ]
            };

        case UPDATE_CATEGORY:
            return {
                ...state,
                categories: [
                    ...state.categories.map((cat) => {
                        if (action.category.id == cat.id)
                            cat = action.category;
                        return cat;

                    })
                ]
            };

        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            };
        default:
            return state;
    }
};


export const getCategoriesCreator = (categories) => ({type: GET_CATEGORIES, categories: categories});
export const addCategoryCreator = (category) => ({type: ADD_CATEGORY, category: category});
export const updateCategoryCreator = (category) => ({type: UPDATE_CATEGORY, category: category});


export default categoriesReducer;