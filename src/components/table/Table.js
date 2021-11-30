import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction, deleteProductAction } from "../../redux/action/ProductAction";
import Modal from "../modal/Modal";
import "./table.scss";

const initState = {
  name: "",
  description: "",
  image: "",
  price: "",
  sale: "",
};

function Table(props) {
  const [editState, setEditState] = useState({});
  const [type, setType] = useState("");
  const { product } = props.data;
  console.log("tale", props);
  const { get, deleteProduct } = props;
  const { data, isLogined } = JSON.parse(localStorage.auth).user;
  useEffect(() => {
    get(data.token);
  }, []);
  const editHandle = (e) => {
    setEditState(e);
    setType("EDIT")
    document.getElementById("modal").style.display = "unset"
  }
  const deleteHandle = (e) => {
    deleteProduct(e, data.token)
  }
  const handleCreate = () => {
    setEditState(initState);
    setType("CREATE")
    document.getElementById("modal").style.display = "unset"
  }
  console.log("getall", props);
  return (
    <div className="table">
      {isLogined ? (
        <>
        <button onClick={() =>handleCreate()}>Create</button>
        <table>
          <thead>
            <tr>
              <th>stt</th>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Price</th>
              <th>Sale</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {product.posts.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.image}</td>
                  <td>{item.price}</td>
                  <td>{item.sale}</td>
                  <td>
                    <button onClick={() => editHandle(item)}>Edit</button>
                    <button onClick={() => deleteHandle(item)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </>
      ) : null}
      <Modal type={type} state={editState} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("haha", getAllProductAction);
  return {
    get: (token) => {
      dispatch(getAllProductAction(token));
    },
    deleteProduct: (editState,token) => {
      console.log("editStet", editState)
      dispatch(deleteProductAction(editState,token));
      // dispatch(getAllProductAction(token))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
