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
    console.log("hello i am product reduver", action.payload)
  switch (action.type) {
    case ProductActionType.GETALL_PRODUCTS:
        const data = action.payload;
      return data;
    default:
      return state;
  }
};

export {productreducer};
