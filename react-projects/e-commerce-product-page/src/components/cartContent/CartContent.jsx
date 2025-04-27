import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import './CartContent.css';
import cartIcon from "../../assets/images/icon-cart.svg";
import plusIcon from "../../assets/images/icon-plus.svg";
import minusIcon from "../../assets/images/icon-minus.svg";

const CartContent = () => {
    const { count, productPrice, increment, decrement, addToCart } = useContext(CartContext);






    return (
        <div className="product-content">
            <p className="company">SNEAKER COMPANY</p>
            <h1>Fall Limited Edition Sneakers</h1>
            <p className='pra'>
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </p>
            <div className="price">
                <div>
                    <span className="new-price">$125.00</span>
                    <span className="discount">50%</span>
                </div>

                <p className='old-price'>$250.00</p>
            </div>

            <div className="btns">
                <div className='count-btns'><button onClick={decrement}>
                    <img src={minusIcon} alt="iconMinus" />
                </button>

                    <span>{count}</span>
                    <button onClick={increment}>
                        <img src={plusIcon} alt="iconPlus" />
                    </button>
                </div>
                <button className="add-to-cart" onClick={addToCart}>
                    <img src={cartIcon} alt="cart icon" />
                    Add to cart
                </button>
            </div>

        </div>
    );
};

export default CartContent;
