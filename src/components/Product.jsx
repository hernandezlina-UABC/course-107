import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import 'bootstrap/dist/css/bootstrap.min.css';


function Product(props) {
    return (
                <div className="product card h-100">
                    <img
                        width={200}
                        src={"/images/"+props.data.image}
                        alt=""
                    />
                    <div className="card-body">
                        <h5 className="card-title">{props.data.title}</h5>
                        <h6 className="card-text"> {props.data.price}</h6>

                        <QuantityPicker/>
                        <button className="btn btn-success add-to-cart-btn">Add to cart</button>
                     </div>
                </div>
    );
}

export default Product;