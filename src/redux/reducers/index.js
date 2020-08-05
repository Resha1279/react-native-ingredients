import {ADD_INGREDIENT, DELETE_INGREDIENT} from '../constants/actionTypes';

const initialState = {
  ingredients: [],
  recipe: 'FruitSalad',
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_INGREDIENT) {
    return {
      ingredients: [...state.ingredients, action.text],
      recipe: 'FruitSalad',
    };
  }
  if (action.type === DELETE_INGREDIENT) {
    return {
      ingredients: state.ingredients.filter((e, i) => i !== action.index),
      recipe: 'FruitSalad',
    };
  }
  return state;
}

export default rootReducer;
