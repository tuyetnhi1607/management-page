import React, { useState, useEffect } from "react";
import "./modal.scss";
import "boxicons";
import { connect } from "react-redux";
import {
  updateProductAction,
  createProductAction,
} from "../../redux/action/ProductAction";

const initState = {
  name: "",
  description: "",
  image: "",
  price: "",
  sale: "",
};

function Modal(props) {
  const { edit, type, create, state } = props;
  const [editState, setEditState] = useState(initState);
  console.log("stateee", state, editState);
  useEffect(() => {
    console.log("set lai state moi ne!!!");
    setEditState(state);
  }, [state]);

  const close = () => {
    document.getElementById("modal").style.display = "none";
  };
  const { token } = JSON.parse(localStorage.auth).user.data;
  const handle = () => {
    if (type === "EDIT") edit(editState, token);
    else create(editState, token);
    close();
  };

  return (
    <div className="modal" id="modal">
      <div className="modal-main">
        <div className="modal-main-header" onClick={() => close()}>
          <i className="bx bxs-x-square"></i>
        </div>
        <div className="modal-body">
          <div className="modal-body-item">
            <div>Name: </div>
            <input
              placeholder="Name"
              value={editState.name}
              type="text"
              onChange={(e) => {
                console.log("target", e.target);
                const name = e.target.value;
                setEditState((editState) => {
                  return { ...editState, name: name };
                });
              }}
            />
          </div>

          <div className="modal-body-item">
            {" "}
            <div>Description: </div>
            <input
              placeholder="Description"
              value={editState.description}
              type="text"
              onChange={(e) => {
                const description = e.target.value;
                setEditState((editState) => {
                  return { ...editState, description: description };
                });
              }}
            />
          </div>
          <div className="modal-body-item">
            <div>Image: </div>
            <input
              placeholder='Image'
              value={editState.image}
              type="text"
              onChange={(e) => {
                const image = e.target.value;
                setEditState((editState) => {
                  return { ...editState, image: image };
                });
              }}
            />
          </div>
          <div className="modal-body-item">
            <div>Price: </div>
            <input
              placeholder="Price"
              value={editState.price}
              type="text"
              onChange={(e) => {
                const price = e.target.value;
                setEditState((editState) => {
                  return { ...editState, price: price };
                });
              }}
            />
          </div>
          <div className="modal-body-item">
            <div>Sale: </div>
            <input
              placeholder="Sale"
              value={editState.sale}
              type="text"
              onChange={(e) => {
                const sale = e.target.value;
                setEditState((editState) => {
                  return { ...editState, sale: sale };
                });
              }}
            />
          </div>
          <button type="submit" onClick={() => handle()}>
            Submit
          </button>
          <button onClick={() => close()}>Close</button>
        </div>
      </div>
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
    edit: (state, token) => {
      dispatch(updateProductAction(state, token));
    },
    create: (state, token) => {
      dispatch(createProductAction(state, token));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
