import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "../../redux/action/ProductAction";

function Table(props) {
  const dispatch = useDispatch();
  const [proState, setProState] = useState({})
  const { auth, product } = props.data;
  const {get} = props
  const {token} = JSON.parse(localStorage.auth).user.data
  useEffect(() => {
    get(token)
  }, []);
  console.log("getall", props);
  return (
    <div className="table">
      Hello
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
