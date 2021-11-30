import React, {useState} from 'react'
import Table from '../table/Table'
import Modal from "../modal/Modal"
import './products.scss'

const initState = {
    name: "",
    description: "",
    image: "",
    price: "",
    sale: "",
};

function Products(props) {
    const [state, setState] = useState({});
    const handleClick = () => {
        setState(initState)
        document.getElementById("modal").style.display = "block"
    }
    return (
        <div>
            <button onClick={handleClick}>Create</button>
            <Table />
            <Modal state={state}/>
        </div>
    )
}

// const mapStateToProps = (state)=>{
//     return {}
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         create: dispatch(createProductAction())
//     }
// }
export default Products