import { authreducer } from "./reducer/AuthReducer";
import { productreducer } from "./reducer/ProductReducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combine = combineReducers({
  auth: authreducer,
  product: productreducer,
});

const store = createStore(combine, composeEnhancers(applyMiddleware(thunk)));

export default store;
