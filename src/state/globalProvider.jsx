import GlobalContext from "./globalContext";
import { useState } from "react";

function GlobalProvider(props) {
    // const [state,setState] = useState(initialValue);
    const [cart, setCart] = useState([])
    const [user, setUser] = useState({name:"Lina", id:70})

    function addProductToCart(newProduct) {
        setCart([...cart, newProduct])
    }

    return (
        <GlobalContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider;