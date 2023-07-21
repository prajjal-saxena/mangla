import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cart_reducer";


const CartContext = createContext();

const getLocalCartData = () =>{
    let localCartdata = localStorage.getItem("CartItem");
    if(localCartdata === null || []) {
        return []
    }
    else{
        return JSON.parse(localCartdata)
    }
}

const initialState = {
    // cart : []
    cart : getLocalCartData(),
}



const CartProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, image, title, weight) =>{
        dispatch({type : "ADD_TO_CART", payload : {id, image, title, weight}})
     }

    // TO ADD THE DATA IN LOCAL STORAGE
    useEffect(()=>{
       localStorage.setItem("CartItem", JSON.stringify(state.cart))
    },[state.cart])


    return <CartContext.Provider value={{...state, addToCart}}>
                {children}
            </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}
export {CartProvider, useCartContext}