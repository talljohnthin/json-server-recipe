import { START_FETCHING_RECIPES, STOP_FETCHING_RECIPES, SET_RECIPES, SET_SPECIALS, SET_RECIPE } from "./recipe.types";
import { axiosInstance } from "../../base";

  
  export const startFetchingRecipes = () => {
    return {
      type: START_FETCHING_RECIPES,
    };
  };

  export const stopFetchingRecipes = () => {
    return {
      type: STOP_FETCHING_RECIPES,
    };
  };
  
  export const setRecipes = (recipes) => {
    return {
      type: SET_RECIPES,
      payload: recipes
    };
  };

  export const setRecipe = (recipe) => {
    return {
      type: SET_RECIPE,
      payload: recipe
    };
  };

  export const setSpecials = (specials) => {
    return {
      type: SET_SPECIALS,
      payload: specials
    };
  };
  
  export const fetchRecipes = (t) => {
    return async (dispatch) => {
      try {
        dispatch(startFetchingRecipes())
        const response = await axiosInstance.get(`/recipes`);
        dispatch(setRecipes(response.data))
        dispatch(stopFetchingRecipes())
      } catch (error) {
        console.log(error)
        dispatch(stopFetchingRecipes())
      }
    };
  };

  export const fetchSpecials = (t) => {
    return async (dispatch) => {
      try {
        const response = await axiosInstance.get(`/specials`);
        dispatch(setSpecials(response.data))
      } catch (error) {
        console.log(error)
      }
    };
  };
  