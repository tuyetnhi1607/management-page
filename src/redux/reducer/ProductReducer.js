import { ProductActionType } from "../action/ProductAction";

const initProduct = {
  posts: [
    {
      name: "",
      image: "",
      description: "",
      price: "",
      sale: "",
    },
  ],
};

const productreducer = (state = initProduct, action) => {
  console.log("hello i am product reduver", action.payload);
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
