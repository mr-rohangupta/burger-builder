import * as actionTypes from "./actionTypes";
//All the actions which are invoked from components related to burger builder
//Go to reducer/burgerBuilder.js file and check action ADD_INGREDIENTS
export const addIngredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    //We added ingredient name as in add ingredient  in Burgerbuilder we are expecting name of ingredient as well
    ingredientName: name
  };
};

//Go to reducer/burgerBuilder.js file and check action REMOVE_INGREDIENTS
export const removeIngredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    //We added ingredient name as in remove ingredient  in Burgerbuilder we are expecting name of ingredient as well
    ingredientName: name
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const fetchIngredientsFailed = () => {
    return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

//Go to sagas/index.js file and check for initIngredients
export const initIngredients = () => {
  return {
    type: actionTypes.INIT_INGREDIENTS
  };
};
