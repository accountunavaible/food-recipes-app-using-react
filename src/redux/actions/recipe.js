import {ADD_RECIPE} from '../constants';

export const addRecipeAction = (recipeObj) => {
    return {
        type: ADD_RECIPE,
        data: recipeObj
    }
}

export const clearRecipeAction = () => {
    return {
        type: ADD_RECIPE
    }
}
