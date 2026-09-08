import { useEffect, useState } from "react";
import Product from "../components/Product";
import DataService from "../services/dataService"
function Catalog() {
    const [products, setProducts] = useState([]);
    //let products = [];


    useEffect(() => {
        //Load your data here
        let service = new DataService();
        let data = service.getProduct();
        setProducts(data);
    },[]); //means this only runs ONCE

    return (
        <div>
            <h1>Check our new products</h1>

            {products.map(prod => <Product key={prod._id} data={prod} />)}

            
        </div>
    );
}
export default Catalog;