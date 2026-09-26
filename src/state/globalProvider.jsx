import GlobalContext from "./globalContext";
import { useState } from "react";

function GlobalProvider(props) {
    // const [state,setState] = useState(initialValue);
    const [cart, setCart] = useState([])
    const [user, setUser] = useState({name:"Lina", id:70})


    return (
        <GlobalContext.Provider value={{
            cart: cart,
            user: user
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider;