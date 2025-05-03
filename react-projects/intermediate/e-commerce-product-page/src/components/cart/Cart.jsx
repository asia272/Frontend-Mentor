import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import product from '../../assets/images/image-product-1.jpg';
import removeIcon from '../../assets/images/icon-delete.svg';
import './cart.css';

const Cart = () => {
    const { count, productPrice, productCount, removeFromCart } = useContext(CartContext);

    return (
        <div className='cart-container'>
            <h3>Cart</h3>
            <div className='product-details'>
                {productCount === 0 ? (
                    <h1 className='empty-cart'>Your cart is empty</h1>
                ) : (
                    <div className='cart-details'>
                        <div className='cart-content'>
                            <img src={product} alt="Product" className='product-image' />
                            <div className='product-info'>
                                <p>Fall Limited Edition Sneakers</p>
                                <p>$125.00 x {productCount} <span className='total'>${productPrice}</span></p>
                            </div>
                            <img src={removeIcon} className='remove-button' onClick={removeFromCart} />
                        </div>

                        <button className='checkout-button' onClick={() => alert('Checkout')}>Checkout</button>


                    </div>

                )}
            </div>

        </div>
    );
};

export default Cart;
