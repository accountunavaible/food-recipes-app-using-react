import {createStore, combineReducers} from "redux";
import categoryReducer from "./reducers/category";
import recipeReducer from './reducers/recipe';

const combined = {
    categoryReducer,
    recipeReducer
}
export default createStore(combineReducers(combined));
