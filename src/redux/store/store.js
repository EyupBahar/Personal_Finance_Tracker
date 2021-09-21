import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { entriesReducer } from "../reducer/reducer";

const initialState = {
  allEntries: {
    data: localStorage.getItem("Entries")
      ? JSON.parse(localStorage.getItem("Entries"))
      : [],
  },
};

const reducer = combineReducers({
  allEntries: entriesReducer,
});

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
