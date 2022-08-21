import {ADD_RECIPE, CLEAR_RECIPE} from '../constants';

export default function recipeReducer(prevState, action) {
    if(prevState === undefined) prevState = [];
    const {type, data} = action
    switch (type) {
        case ADD_RECIPE:
            return [data, ...prevState]
        case CLEAR_RECIPE:
            return []
        default:
            return prevState
    }
}
