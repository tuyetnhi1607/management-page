import axios from "axios"

const ProductActionType = {
    CREATE_PRODUCT: "CREATE_PRODUCT",
    DELETE_PRODUCT: "DELETE_PRODUCT",
    UPDATE_PRODUCT: "UPDATE_PRODUCT",
    GETALL_PRODUCTS: "GETALL_PRODUCTS"
}

const getAllProductAction = (token) => {
    return async (dispatch) => {
        console.log("token", token)
         axios.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${token}`;
        await axios.get('/post')
        .then((res)=>{
            const {posts} = res.data.data
            console.log("hello i am possts", posts)
            dispatch({
                type: ProductActionType.GETALL_PRODUCTS,
                payload: {posts}
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }
}

const createProductAction = (state) => {
    return async (dispatch) => {
        await axios.post('/', state)
        .then((res)=>{
            const {data} = res.data
            dispatch({
                type: ProductActionType.CREATE_PRODUCT,
                payload: {data}
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }
}

export {
    getAllProductAction,
    ProductActionType,
    createProductAction,
}