import {Children, createContext, useState} from "react";

export const CartContext = createContext

export const CartProvider = ({Children}) => {
    return [carts, setCarts] = useState([1,2,3]);

    const value = {
        carts,
    };
    return <CartContext.Provider value={value}>{Children}</CartContext.Provider>;

};
