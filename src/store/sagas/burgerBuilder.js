import { put } from "redux-saga/effects";
import axios from "../../axios-orders";
import * as actions from '../actions';

//Burger Builder sagas for handling the side effects like local storage,reaching out to the server,
//chaining route, executing timers
export function* initIngredientsSaga(action) {
    try{
        const response = yield axios
        .get("https://react-my-burger-eba2f.firebaseio.com/ingredients.json");
        yield put(actions.setIngredients(response.data))
    }catch(error){
yield put(actions.fetchIngredientsFailed());
    }
}