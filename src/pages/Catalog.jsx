import { useEffect, useState } from "react";
import Product from "../components/Product";
import DataService from "../services/dataService";

function Catalog() {
  const [products, setProducts] = useState([]);
  //let products = [];
  const [categories, setCategories] = useState([]);
  const [productsToDisplay, setProductsToDisplay] = useState([]);

  function loadPage() {
    useEffect(() => {
      //Load your data here
      let service = new DataService();
      let data = service.getProduct();
      setProducts(data);
      setProductsToDisplay(data); //initially, display all data
      let categoriesService = ["Organics", "Merch", "Dairy"];
      setCategories(categoriesService);
    }, []); //means this only runs ONCE
  }

    loadPage();
    
    function clearFilter() {
        setProductsToDisplay(products);
    }
  function filter(category) {
    let list = []; //to hold the elements tath match with the filter
    //find products that match with the filter
    for (let i = 0; i < products.length; i++) {
      let prod = products[i];
      if (prod.category === category) {
        list.push(prod);
      }
    }
    setProductsToDisplay(list);
  }
  return (
    <div>
      <h3 className="m-0">Check our new products</h3>
      <div className="d-grid gap-3 d-md-flex justify-content-center m-3">
          <button className="btn btn-outline-secondary" type="button" onClick={clearFilter}>All</button>
          {categories.map((cat) => (
            <button
              className="btn btn-outline-secondary me-md-2"
              type="button" key={cat} onClick={() => filter(cat)}>{cat}
          </button>))}
      </div>
        <div className="d-flex flex-wrap gap-3 d-md-flex justify-content-center">
        {productsToDisplay.map((prod) => (
          <Product key={prod._id} data={prod} />
        ))}
        </div>
      </div>
  );
}


export default Catalog;
