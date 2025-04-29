import React, { useEffect, useState ,useContext} from 'react'
import ProdoctLogo from "../../assets/images/logo.svg"
import iconClose from "../../assets/images/icon-close.svg"
import iconMenu from "../../assets/images/icon-menu.svg"
import imgAvatar from "../../assets/images/image-avatar.png"
import iconCart from "../../assets/images/icon-cart.svg"
import Cart from '../cart/Cart'
import './Navbar.css'
import { CartContext } from '../CartContext';

const Navbar = () => {
    let [isMenuToggle, setIsMenuToggle] = useState(false)
    let [isCart , setIsCart] = useState(false)
    const {productCount} = useContext(CartContext);

    let menuToggle = () => {
        setIsMenuToggle(!isMenuToggle)
        console.log(isMenuToggle)
    }
    useEffect(() => {
        if (isMenuToggle) {
            document.body.classList.add("overlay");
        } else {
            document.body.classList.remove("overlay");
        }
    }, [isMenuToggle]);

    let cartToggle = () => {
        setIsCart(!isCart)
    }
    return (
        <nav className='navbar'>
            <div className='nav-side1'>
                <div className="menu-toggle" onClick={menuToggle}>
                    <img src={iconMenu} alt="logo" />
                </div>
                <div className="product-name">
                    <img src={ProdoctLogo} alt="logo" />
                </div>

                <ul className={`${isMenuToggle ? "active-links" : ""} nav-links`}>
                    <div className="menu-toggle close-btn" onClick={menuToggle}>
                        <img src={iconClose} alt="closeIcon" />
                    </div>

                    <li>
                        <a href="#"> Collections</a>
                    </li>
                    <li>
                        <a href="#">Men</a>
                    </li>
                    <li>
                        <a href="#"> Women</a>
                    </li>
                    <li>
                        <a href="#"> About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className='nav-side2'>
                <div className='cart-count'>
                    {productCount > 0 && <span>{productCount}</span>}
                    <img src={iconCart} alt="cart" onClick={cartToggle} />
                </div>

                <img src={imgAvatar} alt="avatar" className='avatar-img' />
            </div>
            {isCart &&  <Cart/>}
           
        </nav>
    
    )
}

export default Navbar
