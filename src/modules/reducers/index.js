import { combineReducers } from "redux";
import Recipe from "./recipe.reducer";

const reducers = combineReducers({
    recipes: Recipe
});

export default reducers;
