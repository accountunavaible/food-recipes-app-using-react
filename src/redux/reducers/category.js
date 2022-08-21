import {ADD_CATEGORY, CLEAR_CATEGORY} from "../constants";

export default function categoryReducer(prevState, action) {
    if(prevState === undefined) prevState = [];

    const {type, data} = action;
    switch (type) {
        case ADD_CATEGORY:
            return [data, ...prevState];
        case CLEAR_CATEGORY:
            return [];
        default:
            return prevState;
    }
}
