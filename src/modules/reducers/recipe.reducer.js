import {
    STOP_FETCHING_RECIPES,
    START_FETCHING_RECIPES,
    SET_RECIPES,
    SET_RECIPE,
    SET_SPECIALS,
} from "../actions/recipe/recipe.types";
  
const initialState = {
    list: [],
    recipe:{},
    specials: [],
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING_RECIPES:
        return {
            ...state,
            loading: true
        };
        case STOP_FETCHING_RECIPES:
        return {
            ...state,
            loading: false
        };
        case SET_RECIPES:
        return {
            ...state,
            list: action.payload
        };
        case SET_RECIPE:
        return {
            ...state,
            recipe: action.payload
        };
        case SET_SPECIALS:
        return {
            ...state,
            specials: action.payload,
        };
        default:
        return state;
    }
};

export default reducer;
  