import {ADD_CATEGORY , CLEAR_CATEGORY} from "../constants";

export const addCategoryAction = recipeObj => {
    return {
        type: ADD_CATEGORY,
        data: recipeObj
    }
}

export const clearCategoryAction = () => {
    return {
        type: CLEAR_CATEGORY
    }
}
