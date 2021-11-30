import axios from "axios";

const ProductActionType = {
  CREATE_PRODUCT: "CREATE_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT",
  UPDATE_PRODUCT: "UPDATE_PRODUCT",
  GETALL_PRODUCTS: "GETALL_PRODUCTS",
};

const getAllProductAction = (token) => {
  return async (dispatch) => {
    console.log("token", token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .get("/post")
      .then((res) => {
        const { posts } = res.data.data;
        console.log("hello i am possts", posts);
        dispatch({
          type: ProductActionType.GETALL_PRODUCTS,
          payload: { posts },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const createProductAction = (state, token) => {
  return async (dispatch) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .post("/post", state)
      .then((res) => {
        const { posts } = res.data.data;
        dispatch({
          type: ProductActionType.CREATE_PRODUCT,
          payload: { posts },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const updateProductAction = (newState, token) => {
  return async (dispatch) => {
    const id = newState._id;
    const picked = (({ name, description, image, price, sale }) => ({
      name,
      description,
      image,
      price,
      sale,
    }))(newState);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .put(`/post/${id}`, picked)
      .then((res) => {
        const { posts } = res.data.data;
        dispatch({
          type: ProductActionType.UPDATE_PRODUCT,
          payload: {posts} ,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const deleteProductAction = (newState, token) => {
  console.log("new", newState, token);
  return async (dispatch) => {
    const id = newState._id;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .delete(`/post/${id}`)
      .then((res) => {
        const { posts } = res.data.data;
        dispatch({
          type: ProductActionType.DELETE_PRODUCT,
          payload: {posts},
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export {
  getAllProductAction,
  ProductActionType,
  createProductAction,
  updateProductAction,
  deleteProductAction,
};
