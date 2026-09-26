import { useState } from "react";
import DataService from "../services/dataService";

function Admin() {
    // const [state,setState] = useState(initialValue);
    const [couponCode, setCouponCode] = useState("");
    const [couponDiscount, setCouponDiscount] = useState(0);
    const [coupons, setCoupons] = useState([]);
    const [productTitle, setProductTitle] = useState("");
    const [categories, setCategories] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [products, setProducts] = useState([]);


    function saveCoupon() {
        console.log(couponCode);
        console.log(couponDiscount);

        const newCoupon = {
            code: couponCode,
            discount: couponDiscount,
        };

        setCoupons([...coupons, newCoupon]);

        setCouponCode("");
        setCouponDiscount(0);

    }
    function saveProduct() {
        console.log(productTitle);
        console.log(categories);
        console.log([productImage]);
        console.log([productPrice]);

        const newProduct = {
            title: productTitle,
            category: categories,
            image_url: productImage,
            price: productPrice,
        };

        setProducts([...products, newProduct]);

        setProductTitle("");
        setProductImage("");
        setProductPrice(0);

        let categoriesService = ["Rings", "Bracelets", "Necklaces", "Earrings"];
        setCategories(categoriesService);
    }
    return (
        <div className="p-5">
            <h1>Store Administration</h1>

            <div className="d-flex gap-4">
                <section className="w-50">
                    <h3>Add Products</h3>
                    <div>
                        <div className="card w-100">
                            <div className="card-body text-start">
                                <div className="mb-3">
                                    <label className="card-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={productTitle}
                                        onChange={(event) => setProductTitle(event.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="card-label">Category</label>
                                    <select
                                        className="form-select"
                                        value={categories}
                                        onChange={(event) => setCategories(event.target.value)}
                                    >
                                        <option defaultValue="">Pick one...</option>
                                        <option value={"Ring"}>Rings</option>
                                        <option value={"Bracelets"}>Bracelets</option>
                                        <option value={"Necklaces"}>Necklaces</option>
                                        <option value={"Earrings"}>Earrings</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="card-label">Image (URL)</label>
                                    <input
                                        type="url"
                                        className="form-control"
                                        aria-describedby="basic-addon3 basic-addon4"
                                        placeholder="https://images.com/category/1"
                                        value={productImage}
                                        onChange={(event) => setProductImage(event.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <div>
                                        <label className="form-label">Price</label>
                                    </div>
                                    <div className="d-flex">
                                        <span className="input-group-text ">$</span>
                                        <input
                                            type="number"
                                            className="form-control"
                                            aria-label="Amount (to the nearest dollar)"
                                            value={productPrice}
                                            onChange={(event) => setProductPrice(event.target.value)}
                                        />
                                    </div>
                                    <div className="text-center mt-3">
                                        <button
                                            className="btn btn-outline-success btn-sm"
                                            onClick={saveProduct}
                                        >
                                            Save Product
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="mt-3 d-flex flex-column">
                            <>
                            <h4>Products List:</h4>
                            </>
                            <ul className="list-group justify-content-between flex-row wid-3 text-start " style={{ width: "100%" }}>
                                {products.map((product) => (
                                    <li key={product.title} className="list-group-item card w-80 p-0">
                                        <img src={product.image_url} className="card-img-top mw-per" />
                                        <h6 className="position-absolute 
                                                top-0 end-0 m-2 me-3 text-dark fw-bold
                                                 rounded-3 shadow-sm border-0
                                                fs-6 badge text-bg-warning
                                                position-relative">{product.category}</h6>
                                        <div className="d-flex flex-wrap justify-content-between p-3">
                                            <p><span className="fw-semibold fs-4 text-capitalize">{product.title}</span></p>
                                            <p className="card-text">
                                                <span className="text-secondary h-auto align-middle">${product.price}
                                                </span>
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>


                <section className="w-50">
                    <h3>Add Coupons</h3>
                    <div>
                        <div className="card w-100">
                            <div className="card-body text-start">
                                <div className="mb-3">
                                    <label className="card-label">Code</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={couponCode}
                                        onChange={(event) => setCouponCode(event.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Discount</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={couponDiscount}
                                        onChange={(event) => setCouponDiscount(event.target.value)}
                                    />
                                </div>

                                <div className="text-center">
                                    <button
                                        className="btn btn-outline-success btn-sm"
                                        onClick={saveCoupon}
                                    >
                                        Save Coupon
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <h4>Coupons List:</h4>
                            <ul className="list-group text-start">
                                {coupons.map((coupon) => (
                                    <li key={coupon.code} className="list-group-item">
                                        {coupon.code}, {coupon.discount}%
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Admin;
