import { createContext } from "react";

const GlobalContext = createContext({
    cart: [], //Default cart is an empty array, will hold product objects later.
    user: {},

    addProductToCart: ()=>{}
})

export default GlobalContext;
