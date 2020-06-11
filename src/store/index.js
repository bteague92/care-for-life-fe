import { reducer as formReducer } from "redux-form";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducers/userReducer";
import familyReducer from "../reducers/familiesReducer";
import familyFormReducer from "../reducers/familyFormReducer";
import surveyReducer from "../reducers/surveyReducer";

const store = createStore(
  combineReducers({ userReducer, familyReducer, familyFormReducer, formReducer, surveyReducer }),
  applyMiddleware(thunk)
);

export default store;
