import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useContext } from "react";
import GlobalContext from "../state/globalContext";


function Product(props) {

    const cart = useContext(GlobalContext).cart
    const globalAdd = useContext(GlobalContext).addProductToCart

    const [quantity, setQuantity] = useState(1)

    function handleQuantityChange(quantity) {
        setQuantity(quantity)
    }

    function onAdd() {
        let fixedProduct = { ...props.data }
        fixedProduct.quantity = quantity
        globalAdd(fixedProduct)
    }

    return (
        <div className="product card p-3 m-0">
            <img
                width={200}
                src={"/images/" + props.data.image}
                alt=""
            />
            <div className="card-body m-0 pb-0 h-3">
                <h5 className="card-title">{props.data.title}</h5>
                <h6 className="card-text m-2"> $ {props.data.price}</h6>
                <QuantityPicker onChange={handleQuantityChange} />
            </div>
            <div className="card-body">
                <button onClick={onAdd} className="btn btn-success add-to-cart-btn">Add to cart</button>
            </div>
        </div>
    );
}

export default Product;