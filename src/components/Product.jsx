import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props) {
    return (
        <div className="card">
            <img
                width={200}
                src={"/images/"+props.data.image}
                alt=""
            />

            <div>
                <h5 className="product-title">{props.data.title}</h5>
                <h6 className="product-price"> {props.data.price}</h6>

                <QuantityPicker/>

                <button className="add-to-cart-btn">Add to cart</button>
            </div>
        </div>
    );
}

export default Product;