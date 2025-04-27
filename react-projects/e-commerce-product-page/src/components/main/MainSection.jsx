import React from 'react';
import CartContent from '../cartContent/CartContent';
import Sampl from '../cartSample/Sampl';
import './MainSection.css';



const MainSection = () => {
    return (
        <>
            <div className="product-container">
                <Sampl />
                <CartContent />
               
            </div>
            
        </>
    );
};

export default MainSection;
