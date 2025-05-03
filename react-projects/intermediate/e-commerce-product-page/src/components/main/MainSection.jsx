import React from 'react';
import CartContent from '../cartContent/CartContent';
import Sampl from '../cartSample/Sampl';
import './MainSection.css';



const MainSection = () => {
    return (

        <main className="product-container">
            <Sampl />
            <CartContent />

        </main>


    );
};

export default MainSection;
