import { ProductActionType } from "../action/ProductAction";
import {useCallbacks} from "react"

const initProduct = {
  posts: [
    {
      name: "",
      image: "",
      description: "",
      price: "",
      sale: "hihi",
    },
  ],
};

const productreducer = (state = initProduct, action) => {
  console.log("hello i am product reduver", action);
  switch (action.type) {
    case ProductActionType.GETALL_PRODUCTS:
      return action.payload;
    case ProductActionType.UPDATE_PRODUCT:
      return action.payload;
    case ProductActionType.CREATE_PRODUCT:
      return action.payload;
    case ProductActionType.DELETE_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export { productreducer };
