import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

var middelwares = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middelwares))
);

export default store;
