import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getAllProductAction,
  deleteProductAction,
} from "../../../redux/action/ProductAction";
import Modal from "../../modal/Modal";
import Table2 from "../../table2/Table2";
import './products.scss'

const initState = {
  name: "",
  description: "",
  image: "",
  price: "",
  sale: "",
};

function Products(props) {
  const [editState, setEditState] = useState({});
  const [type, setType] = useState("");
  const { product } = props.data;
  console.log("tale", editState);
  const { getall, deleteProduct } = props;
  const { data, isLogined } = JSON.parse(localStorage.auth).user;
  useEffect(() => {
    getall(data.token);
  }, []);
  const editHandle = (e) => {
    setEditState(e);
    setType("EDIT");
    document.getElementById("modal").style.display = "unset";
  };
  const deleteHandle = (e) => {
    deleteProduct(e, data.token);
  };
  const handleCreate = () => {
    setEditState(initState);
    setType("CREATE");
    document.getElementById("modal").style.display = "unset";
  };
  console.log("getall", props);
  const dataHeader = ["", "name", "description", "image", "price", "sale", ""];

  const renderHeader = (item, index) => <th key={index}>{item}</th>;

  const dataBody = [...product.posts].reverse();
  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{index+1}</td>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.image}</td>
      <td>{item.price}</td>
      <td>{item.sale}</td>
      <td >
        <div className="handle">
          <div onClick={() => editHandle(item)}>
          <i className="bx bx-edit-alt"></i>
        </div>
        <div onClick={() => deleteHandle(item)}>
          <i className="bx bx-trash"></i>
        </div>
        </div>
      </td>
    </tr>
  );
  return (
    <div className="products">
      <button className="btn btn-create"onClick={() => handleCreate()}>Create</button>
      <div className="title">List Products</div>
      <Table2
        key={Math.floor(Math.random() * 10000000)}
        limit={10}
        dataHeader={dataHeader}
        renderHeader={(item, index) => renderHeader(item, index)}
        dataBody={dataBody}
        renderBody={(item, index) => renderBody(item, index)}
      />
      <Modal key={`${type==="EDIT" ? null : Math.floor(Math.random() * 10000000)}`} type={type} state={editState} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getall: (token) => {
      dispatch(getAllProductAction(token));
    },
    deleteProduct: (editState, token) => {
      dispatch(deleteProductAction(editState, token));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
