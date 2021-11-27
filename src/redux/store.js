import { authreducer } from "./reducer/AuthReducer";
import { productreducer } from "./reducer/ProductReducer";

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const combine = combineReducers({
  auth: authreducer,
  product: productreducer,
});

const store = createStore(combine, applyMiddleware(thunk));

export default store;
