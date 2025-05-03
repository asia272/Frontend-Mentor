import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [productPrice, setProductPrice] = useState(0);
    const [productCount, setProductCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1);
    
    };

    const decrement = () => {
        if (count > 0) {
            setCount(prev => prev - 1);
            setProductPrice(prev => prev - 125);
        }
    };
    const addToCart = () => {
        setProductPrice(prev => prev + count * 125);
        setProductCount(prev => prev + count);
        setCount(0);
    };
    const removeFromCart = () => {
        setProductCount(0);
        setProductPrice(0);
    };
 
    

    return (
        <CartContext.Provider value={{ count, productPrice, productCount,increment, decrement ,addToCart, removeFromCart }}>

            {children}
        </CartContext.Provider>
    );
};
