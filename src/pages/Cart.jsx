import { useContext } from "react";
import GlobalContext from "../state/globalContext";
import Product from "../components/Product";

function Cart() {
    const cart = useContext(GlobalContext).cart

    return (
        <div>
            <h1 className="m-4">Ready to complete the purchase?</h1>
            <ul>

            {
                cart.map(product =>
                    <li key={product.title} className="d-flex align-items-center justify-content-between mb-3 me-4 border">
                        <img width={200} src={"/images/"+product.image} alt="" />
                        <div>{product.title}</div>
                        <div>{product.category}</div>
                        <div>Quantity: {product.quantity}</div>
                        <div>Price: ${product.price}</div>
                        <div className="me-3">Total: ${product.price * product.quantity}</div>
                    </li>
                )
            }
            </ul>
        </div>
    )
}
export default Cart;